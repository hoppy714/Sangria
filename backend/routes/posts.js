const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//投稿を作成
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        return res.status(200).json(savedPost);
    } catch (err) {
        return res.status(500).json(err);
    }
});

//投稿を編集する
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({
                $set: req.body,
            });
            return res
                .status(200)
                .json("投稿の編集が完了しました。")
        } else {
            return res
                .status(403)
                .json("自分の投稿以外は編集できません。");
        }
    } catch (err) {
        return res.status(500).json(err);
    }
});

//投稿を削除
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            return res
                .status(200)
                .json("投稿を削除しました。");
        } else {
            return res
                .status(403)
                .json("自分の投稿以外は削除できません。");
        }
    } catch (err) {
        return res.status(500).json(err);
    }
});

//特定の投稿を取得
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        return res.status(200).json(post);
    } catch (err) {
        return res.status(500).json(err);
    }
});

//いいね機能実装部分
//投稿のいいね
router.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        //likesの中に自分がいないときいいねする
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({
                $push: {
                    likes: req.body.userId,
                },
            });
            return res.status(200).json("いいねを押しました。");
        } else {
            await post.updateOne({
                $pull: {
                    likes: req.body.userId,
                },
            });
            return res.status(403).json("いいねを解除しました。");
        }
    } catch (err) {
        return res.status(500).json(err);
    }
});

//フォロワーのタイムラインを表示する。
router.get("/timeline/all", async (req, res) => {
    try {
        const currentUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
        //フォロー中のユーザーのタイムライン表示。
        const friendPosts = await Promise.all(currentUser.followings.map((friendId) => {
            return Post.find({ userId: friendId });
        })
        );
        return res.status(200).json(userPosts.concat(...friendPosts));
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;