const path = "public/images/news/"
const data = [
    {
        "id": "1",
        "pic": path + "news1.jpg",
        "tag": "保養知識",
        "time": "2021/04/26",
        "title": "[文章標題範例]研究：美國、加拿逾半數化妝品 可能含有毒化學物質",
        "brief": "[內文範例]近期有美國研究報告指出，在美國和加拿大銷售的化妝品中，有一半以上可能含有毒化學物質，即多氟烷基物質（PFAS）。《美聯社》報導，聖母大學（Notre Dame University）的研究人員測試了230多種產品，包括遮瑕、粉底、眼影和眉筆等化妝品，發現56%的粉底和眼部產品、48%的唇部產品和47%的睫毛膏都含有PFAS。",
    }

    ,{
        "id": "2",
        "pic": path + "news2.jpg",
        "tag": "產業新訊",
        "time": "2021/04/25",
        "title": "[文章標題範例]大麻保養品？我的產品可以添加嗎?",
        "brief": "[內文範例]近期市面上推出了一些跟大麻萃取物CBD相關的保養品，但是CBD到底是什麼呢？猜猜看",
    }
    ,{
        "id": "3",
        "pic": path + "news3.jpg",
        "tag": "原料趨勢",
        "time": "2021/04/23",
        "title": "[文章標題範例]極簡永續理念 成為買單關鍵",
        "brief": "[內文範例]依據皮尤研究中心（Pew Research Center）調查，Z世代比起其他世代出現許多",
    }
    ,{
        "id": "4",
        "pic": path + "news4.jpg",
        "tag": "保養新知",
        "time": "2021/04/21",
        "title": "[文章標題範例]戴口罩長痘痘怎麼辦?",
        "brief": "[內文範例]從概念上來說，肌膚表皮會不斷的更新代謝，皮膚的最底層會製造新生的皮膚細胞，如此這般，這般如此",
    }

    ,{
        "id": "5",
        "pic": path + "news5.jpg",
        "tag": "市場動態",
        "time": "2021/04/20",
        "title": "[文章標題範例]疫情時代下的保養品發展",
        "brief": "[內文範例]隨著疫情持續發展，戴口罩已經成為新常態，而女性最大的困擾，即是戴口罩時，口罩上會殘留化妝的粉底或口紅之類",
    }

];


const app = {
    data() {
        return {
            list: data
        }
    }
}

const newsMainList = Vue.createApp(app).mount("#newsMainList");

$(function() {
    lizzUI.highlight(".page_nav-item", "news");
});