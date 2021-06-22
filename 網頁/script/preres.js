function calculateage(cage){
    if(cage <= 39){
        result=0;
    }

    else if(cage <= 49 ){
        result=3;
    }

    else if(cage <= 59 ){
        result=5;
    }

    else if(cage <= 69 ){
        result=7;
    }

    else{
        result=9;
    }
    return result;
}

function calculatebp(cbp){
    if(cbp < 120){
        result=0;
    }

    else if(cbp < 139){
        result=1;
    }

    else if(cbp < 149){
        result=3;
    }

    else{
        result=4;
    }
    return result;
}

function calculatedan(cdan){
    if(cdan < 130){
        result=1;
    }

    else if(cdan < 200){
        result=0;
    }

    else if(cdan < 240){
        result=0;
    }

    else if(cdan < 300){
        result=0;
    }

    else{
        result=1;
    }
    return result;
}

function calculatesex(csex){
    if(csex="male"){
        result=1;
    }
    else{
        result=0;
    }
    return result;
}

function calculatedia(cdia){
    if(cdia="yes"){
        result=1;
    }
    else{
        result=0;
    }
    return result;
}

function calculatesmoke(csmoke){
    if(csmoke="no"){
        result=0;
    }
    else{
        result=1;
    }
    return result;
}

function calculateheart(cheart){
    if(cheart="yes"){
        result=1;
    }
    else{
        result=0;
    }
    return result;
}

function calculateexer(cexer){
    if(cexer="yes"){
        result=0;
    }
    else{
        result=1
    }
    return result;
}

var value = {
    "-1":{
        'stroke':0.00,
        'cardio':0.00
    },
    '0':{
        'stroke':0.01,
        'cardio':0.00
    },
    '1':{
        'stroke':0.01,
        'cardio':1.00
    },
    '2':{
        'stroke':0.02,
        'cardio':1.00
    },
    '3':{
        'stroke':0.02,
        'cardio':1.00
    },
    '4':{
        'stroke':0.04,
        'cardio':1.00
    },
    '5':{
        'stroke':0.06,
        'cardio':1.00
    },
    '6':{
        'stroke':0.1,
        'cardio':2.00
    },
    '7':{
        'stroke':0.16,
        'cardio':3.00
    },
    '8':{
        'stroke':0.26,
        'cardio':4.00
    },
    '9':{
        'stroke':0.42,
        'cardio':5.00
    },
    '10':{
        'stroke':0.68,
        'cardio':6.00
    },
    '11':{
        'stroke':1.09,
        'cardio':8.00
    },
    '12':{
        'stroke':1.74,
        'cardio':10.0
    },
    '13':{
        'stroke':2.78,
        'cardio':12.0
    },
    '14':{
        'stroke':4.43,
        'cardio':16.0
        
    },
    '15':{
        'stroke':7.01,
        'cardio':20.0
        
    },
    '16':{
        'stroke':11.0,
        'cardio':25.0
    }
}




$('.predict').click(function(){

    const gender = $('input[name="sex"]:checked').val()
    const age = $('input[name="age"]').val()
    const bp = $('input[name="bp"]').val()
    const dia = $('input[name="dia"]:checked').val()
    const smoke = $('input[name="smoke"]:checked').val()
    const heart = $('input[name="heart"]:checked').val()
    const dan = $('input[name="dan"]').val()
    const exer = $('input[name="exer"]:checked').val()
    
    if (gender == undefined||age== undefined||bp== undefined||dia== undefined||smoke== undefined||heart== undefined||dan== undefined||exer== undefined)
        alert('請填完欄位')
    else{
        const calage=calculateage(age)
        const calbp=calculatebp(bp)
        const caldan=calculatedan(dan)
        const calsex=calculatesex(gender)
        const caldia=calculatedia(dia)
        const calsmoke=calculatesmoke(smoke)
        const calheart=calculateheart(heart)
        const calexer=calculateexer(exer)

        const total=calage+calbp+caldan+calsex+caldia+calsmoke+calheart+calexer; 
        const stroke = value[total]["stroke"]
        const cardio = value[total]["cardio"]
        alert("分數為"+total+"\n中風機率為"+stroke+"%\n心血管疾病機率為"+cardio+"%")
    }
})