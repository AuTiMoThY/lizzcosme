const rndList = [
    {
        "title": "保濕",
        "subList": ["玻尿酸化妝水", "面膜", "精華露"]
    }
    ,{
        "title": "美白",
        "subList": ["左旋C亮白精華液", "美白凝膠"]
    }
    ,{
        "title": "修護",
        "subList": ["角鯊烷修護乳", "積雪草修護精華"]
    }
    ,{
        "title": "舒緩敏感",
        "subList": ["山茶花精華油", "漢方舒膚乳液"]
    }
    ,{
        "title": "抗老/抗皺",
        "subList": ["三胜肽精華", "凝露", "乳液"]
    }
    ,{
        "title": "抗痘/控油",
        "subList": ["歐洲七葉樹收斂水", "茶樹鬍後水", "精華液"]
    }
    ,{
        "title": "頭皮護理",
        "subList": ["蔓荊", "龍膽", "何首烏植物活性頭皮養護液"]
    }
    ,{
        "title": "除臭",
        "subList": ["天然除臭洗衣精"]
    }
    ,{
        "title": "個人清潔",
        "subList": ["天然葡萄糖苷", "胺基酸溫和潔淨沐浴精", "洗髮精", "洗手液"]
    }
    ,{
        "title": "居家清潔",
        "subList": ["環保植物洗衣精", "洗碗精"]
    }
    ,{
        "title": "香氛",
        "subList": ["複方精油擴香", "精油芳療"]
    }
    ,{
        "title": "去角質",
        "subList": ["植物顆粒去角質凝膠"]
    }
    ,{
        "title": "物理防曬",
        "subList": ["海洋友善純物理防曬"]
    }
    ,{
        "title": "抗菌",
        "subList": ["茶樹抗菌洗手液"]
    }
    ,{
        "title": "卸妝",
        "subList": ["清爽溫和卸妝水", "清爽溫和卸妝乳液"]
    }
    ,{
        "title": "其他",
        "subList": ["乾洗手", "除毛膏"]
    }
];

const app = {
    data() {
        return {
            list: rndList
        }
    }
}

const RnDList = Vue.createApp(app).mount("#RnDList");

$(function() {
    lizzUI.highlight(".page_nav-item", "rnd");
});