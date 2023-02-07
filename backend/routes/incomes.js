const router = require("express").Router();
const User = require("../models/User");
const Income = require("../models/Income");

router.post("/", async (req, res) => {
    //投資、回収をデータベースに挿入する
    const newIncome = new Income(req.body);
    try {
        const savedIncome = await newIncome.save();
        return res.status(200).json(savedIncome);
    } catch (err) {
        return res.status(500).json(err);
    }
});
//トータル収支の計算
router.get("/all", async (req, res) => {
    try {
        //ユーザー変数を利用して同じユーザーの収支を取得
        const currentUser = await User.findById(req.body.userId);
        const userTotal = await Income.find({ userId: currentUser._id });
        // const viewTotal = (parseInt(total.plus, 10) - parseInt(total.minus, 10));
        return res.status(200).json(userTotal)
    } catch (err) {
        return res.status(500).json(err);
    }
});
//月間トータル収支の計算
router.get("/month", async (req, res) => {
    try {
        //ユーザー変数を利用して同じユーザーの収支を取得
        const currentUser = await User.findById(req.body.userId);
        const userTotal = await Income.find({ userId: currentUser._id });
        // const checkMonth = userTotal.getFullYear() + userTotal.getMonth() + 1;
        const result = userTotal.filter(function (checkMonth, index) {
            return ((checkMonth.createdAt).indexOf(req.day) >= 0);
        });
        return res.status(200).json(result)
    } catch (err) {
        return res.status(500).json(err);
    }
})
module.exports = router;