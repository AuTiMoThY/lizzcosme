const IMGPATH = "./public/images/env/";
const envData = [
    {
        "anchor": "anchor1",
        "anchor_link": "#anchor1",
        "name": "實驗室及品管",
        "content": "實驗室提供完整的設計開發製程及有效化粧保養品相關研發及製程開發服務。 接受委託配方開發、製程研究、專業代工生產、專案申請等服務。 在生產過程中：從進料、配製、罐裝、滅菌殺菌到檢查出貨，每一個環節都有嚴謹細緻的操作流程與規範；在這裡每一項產品都要經過嚴格的檢測，包含黏度檢驗、酸鹼值、耐久性測驗、安定性測試等，在每一個細節中的管理流程，確保每項產品都能有優良的品質。\n",
        "pic": `${IMGPATH}env1.jpg`
    }
    ,{
        "anchor": "anchor2",
        "anchor_link": "#anchor2",
        "name": "浴塵室",
        "content": "人員從更衣區進入無塵室必須通過空氣浴塵室，利用高速強力的潔淨空氣， 有效而迅速清除去附著在無塵衣上的灰塵、頭髮、毛屑等雜物，大幅減少人員進出無塵室所帶來的污染問題。\n",
        "pic": `${IMGPATH}env2.jpg`
    }
    ,{
        "anchor": "anchor3",
        "anchor_link": "#anchor3",
        "name": "緩衝區",
        "content": "廠房內外區分，人員與物料通道分開，貨品要進出時須先進入緩衝區。\n貨品要進入時廠外人員將貨品送入再由廠內人員將貨品送進廠內，貨品要送出時則反順序，如此才不會將粉塵帶入。\n",
        "pic": `${IMGPATH}env3.jpg`
    }
    ,{
        "anchor": "anchor4",
        "anchor_link": "#anchor4",
        "name": "純水設備",
        "content": "水是保養品生產中不可或缺的重要原料。由於檢驗需要時間，故要求工藝用水具有高度的可靠性和穩定性。加上水非常容易滋生微生物，所以工藝用水的管理在化妝品生產中尤顯重要。藉由製程參數之檢驗或監測予以確認水質，並定期確認停滯污染之風險，確保用水品質不受影響。\n同時RO系統因設備費用成本高且敏感度高，故通常需有適當的前置處理設備，以確保RO壽命，本系統係以複層式過濾器，活性碳過濾器，硬水軟化機，去除殘留氯及SDI的淨化，降低鈣鎂離子量作為RO膜的保護處理，達到純化水之需求標準，再以UV紫外線殺菌系統抑菌循環，定期操作控制系統內的生菌數，以符合保養品純水質的要求。\n",
        "pic": `${IMGPATH}env4.jpg`
    }
    ,{
        "anchor": "anchor5",
        "anchor_link": "#anchor5",
        "name": "製造設備",
        "content": "全自動真空乳化攪拌機100L、加溫溶解槽100L。  原料投入之後，生產製程中的溫度控制、乳化及刮邊攪拌速度、真空脫泡等要求條件可預先輸入設定值，從開始生產到完成可自動化作業，減少人為疏失，達到規格化生產條件。\n",
        "pic": `${IMGPATH}env5.jpg`
    }
    ,{
        "anchor": "anchor6",
        "anchor_link": "#anchor6",
        "name": "原料室",
        "content": "產品之配方由原料調配人員按生產比例領料調配好送至製造室讓生產技術人員生產製造。\n",
        "pic": `${IMGPATH}env6.jpg`
    }
    ,{
        "anchor": "anchor7",
        "anchor_link": "#anchor7",
        "name": "充填室自動化設備",
        "content": `
        自動化充填設備(微電腦定量充填機、活塞式定量充填機)無塵的潔淨空間讓產品更加安全衛生。\n
        採用醫療級定量幫浦,搭配衛生級管配件，充填過程中原料與幫浦不接觸，真正達到衛生安全的品質要求。<br>自吸能力強，可充填之原料範圍廣，自水類,油類、乳液至高粘度霜類皆可充填。對於一般液類產品可自吸充填，免除上料的麻煩，流動性較差的高粘度產品，搭配不鏽鋼料斗使用，充填量精準。\n
        微電腦控制系統，搭配AC伺服馬達，液晶螢幕中文顯示，充填條件全數位式設定，操作簡單，故障率低。\n
        `,
        "pic": `${IMGPATH}env7.jpg`
    }
    ,{
        "anchor": "anchor8",
        "anchor_link": "#anchor8",
        "name": "包裝再檢驗",
        "content": "儷氏在乎您的產品品質，品檢人員除了抽檢生產後的半成品、成品作為品質的檢驗與比對，更會抽檢成品微生物以確保最終產品的安全性。\n",
        "pic": `${IMGPATH}env8.jpg`
    }
    ,{
        "anchor": "anchor9",
        "anchor_link": "#anchor9",
        "name": "圓瓶貼標機",
        "content": "控制系統採用日本大廠三菱PLC，簡單操作易上手。出標系統採用步進馬達，貼標精準度高且易於調整控制。貼標系統採用德國大廠SICK感測器(電眼)，品質穩定、感應準確。搭配手輪設計，可輕鬆調整貼標位置且易於記錄。長時間執行貼標作業，穩定性高、精準貼標、品質穩定。\n",
        "pic": `${IMGPATH}env9.jpg`
    }
    ,{
        "anchor": "anchor10",
        "anchor_link": "#anchor10",
        "name": "自動鎖蓋機",
        "content": `
        側旋式鎖蓋機，適用於噴槍蓋、壓頭蓋、噴霧蓋和一般塑膠平面蓋。人工將蓋子放入瓶口，鎖蓋滾輪會自動鎖蓋，並控制扭力。\n
        搭配人機顯示介面，容易操作各設定值，鎖蓋滾輪由伺服馬達控制，可調整鎖蓋扭力，由人機介面控制並提供記憶參數選項，迅速和容易更換不同產品。\n
        `,
        "pic": `${IMGPATH}env10.jpg`
    }
    ,{
        "anchor": "anchor11",
        "anchor_link": "#anchor11",
        "name": "全自動面膜設備",
        "content": "自動定量充填、封口、打印 機械動作 : 人員將面膜袋(已裝入生物纖維膜)放至料架上→自動取袋→充填→封口→打印 產品特性: 自動充填減少人為汙染、生產效率高、穩定性佳\n",
        "pic": `${IMGPATH}env11.jpg`
    }
    ,{
        "anchor": "anchor12",
        "anchor_link": "#anchor12",
        "name": "試用包充填機",
        "content": "操作與維修極為方便、容易。可自動封切校正、封切精準度更高。自動快速感應電眼位置，不浪費包材。另具監視功能可自動警示異常，以利快速維修。機體與包裝物接觸主件為不鏽鋼，塑鋼構造，符合安全衛生標準。給料機構加裝斷料裝置, 確保包裝物不殘留封口處, 封口緊實美觀。\n",
        "pic": `./public/images/services/service9.jpg`
    }
    ,{
        "anchor": "anchor13",
        "anchor_link": "#anchor13",
        "name": "噴印機",
        "content": "採用專為台灣開發的LINX系統，帶有拖放區域定位功能和簡單圖標的大型彩色觸控螢幕使噴印建立資料過程更直觀。通過 IP55 防水，防塵國際標準的高品質機種<br>FullFlush® 系統自動對噴頭及管路執行最徹底清潔和乾燥，使用RS232連接來整合產線或工廠系統。\n",
        "pic": `${IMGPATH}env13.jpg`
    }
    ,{
        "anchor": "anchor14",
        "anchor_link": "#anchor14",
        "name": "有效性評估",
        "content": `
        便利性與準確度的研究級皮膚檢測儀器，適用於化妝保養品牌商、製造商、醫學美容、學術單位及各領域研究機構、實驗室等，進行臨床實驗測試與有效性驗證研究。\n
        智慧定錨功能，高準確度與再現性，快速拍攝、操作容易及便利的數據圖表分析\n
        `,
        "pic": `${IMGPATH}env14.jpg`
    }

];

const app = {
    data() {
        return {
            list: envData
        }
    }
}

const envApp = Vue.createApp(app).mount("#envApp");



$(function () {
    $(".page_main-nav-item").first().addClass("js-active");

    $(".page_main-nav-item .inner").click(function(){
        const id = $(this).attr("href");

        $(".page_main-nav-item").removeClass('js-active');
        $(this).parents('.page_main-nav-item').addClass('js-active');

        console.log(id);

        $(window).scrollTo($(".env_item" + id), 800, {offset:-90});

    });


    let $nav_list = $(".page_main-nav-bd ul");
    let $nav_item = $(".page_main-nav-item");
    let navItemLen = $nav_item.length;
    let navTotalWidth = 0;

    if ( window.matchMedia("(max-width: 768px)").matches ) {
        try {

            $nav_item.each(function(i, elm) {
                navTotalWidth += $nav_item.eq(i).innerWidth();
            });

            $nav_list.width(navTotalWidth);

            console.log(navTotalWidth);
        } catch (error) {
            console.log(error);
        }
    }
    else {
        try {

        } catch (error) {
            console.log(error);
        }
    }

});