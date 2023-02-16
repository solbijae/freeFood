$(document).ready(function(){
    $.ajax({
        url: "https://openapi.gg.go.kr/GDreamCard?KEY=73c01d275fbc41afb0a13bb94bf545f3",
        type: "GET",
        success: function(result){
            var result = result.querySelectorAll("REFINE_WGS84_LOGT")
            var resultArr = []
            for(i=0; i<result.length; i++){
                resultArr.push(result[i]['innerHTML'])
            }
            console.log(resultArr)

            
        }
    })
})
