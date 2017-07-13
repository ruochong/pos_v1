'use strict';

'use strict';

const barcodelist[
  'ITEM000001',
  'ITEM000001',
  'ITEM000001',
  'ITEM000001',
  'ITEM000001',
  'ITEM000003-2',
  'ITEM000005',
  'ITEM000005',
  'ITEM000005'
]
const infProduct[
    {
   barcode: 'ITEM000001',
   name: '可口可乐',
   unit: '瓶',
   price: 3.00
},
{
   barcode: 'ITEM000002',
   name: '可口可乐',
   unit: '瓶',
   price: 3.00
}
]
const loadPromotions[
   {
     type: 'BUY_TWO_GET_ONE_FREE',
     barcodes: [
       'ITEM000000',
       'ITEM000001'
     ]
   },
   {
     type: 'OTHER_PROMOTION',
     barcodes: [
       'ITEM000003',
       'ITEM000004'
     ]
   }
]
function getBarcodeWithCount(barcodelist){
    var barcodeCount=[];
    for(var i=0;i<barcodelist.length;i++){
        if(barcodelist[i].length==10){
            barcodeCount[i].barcode=barcodelist[i];
            barcodeCount[i].count=1;
        }
        else
            barcodeCount[i].barcode=barcodelist[i].split("-")[0];
            barcodeCount[i].count=barcodelist[i].split("-")[1];

    }
    var barcodeWithCount=[];
    for(var j=0;j<barcodeCount.length;j++){
        var tag=0;
        for(var k=0;k<barcodeWithCount.length;k++){
            if(barcodeCount[j].barcode=barcodeWithCount[k].barcode){
                barcodeWithCount[k].count+=barcodeCount[j].count;
                tag=1;
            }
            if(tag==0){
                barcodeWithCount.push[{barcode:barcodeCount[i].barcode,conut:barcodeWithCount[i].count}];
                
            }
        }
    }
    return barcodeWithCount;

}
fuction getPostList(barcodeWithCount,infProduct){
    for(var i=0;i<barcodeWithCount.length;i++){
        for(var j=0;j<infProduct.length;j++){
            if(barcodeWithCount[i].barcode==infProduct[j].barcode){
                barcodeWithCount[i].name=infProduct[j].name;
                barcodeWithCount[i].price=infProduct[j].price;
                barcodeWithCount[i].unit=infProduct[j].unit;
                barcodeWithCount[i].perPrice=barcodeWithCount[i].price*barcodeWithCount[i].conut;
            }
            }
        }
        return barcodeWithCount;
}
function getTruePustList(barcodeWithCount,loadPromotions){
    var listPromotions=loadPromotions[0].barcodes;
    for(var j=0;j<barcodeWithCount.length;j++){
        if((listPromotions.indexof(barcodeWithCount[j].barcode))>=0 && (barcodeWithCount[j].count>1))
        {
            barcodeWithCount[j].disPrice=barcodeWithCount[j].perPrice;

            barcodeWithCount[j].truePtice=barcodeWithCount[j].perPrice-barcodeWithCount[j].disPrice;

        }
            barcodeWithCount[j].disPrice=0;
            barcodeWithCount[j].truePtice=barcodeWithCount[j].perPrice;
    }
    return barcodeWithCount;
}
function getAllPrice(barcodeWithCount){
    var allPrice=0;
    for(var i=0;i<barcodeWithCount.length;i++){
        allprice+=barcodeWithCount[i].truePtice;
    }
    return allprice;
}
function getAllPromotion(barcodeWithCount){
    var allPromotion=0;
    for(var i=0;i<barcodeWithCount.length;i++){
        allPromotion+=barcodeWithCount[i].disPrice;
    }
    return  allPromotion;
}
function print(barcodeWithCount,allPrice,allPromotion){
    var str="***<没钱赚商店>收据***/n";
    for(var i=0;i<barcodeWithCount.length;i++){
        str+=`名称：${barcodeWtthOount[i].barcode}，数量：${barcodeWtthOount[i].count}${barcodeWtthOount[i].unit}，单价：${barcodeWtthOount[i].price}(元)，小计：${barcodeWtthOount[i].perPrice}(元)\n`;
    }
    str+=`----------------------
    总计：${allprice}(元)
    节省：${allPromotion}(元)
    **********************`;
    return str;
}
function printReceipt(print){
    console.log(str);
}
