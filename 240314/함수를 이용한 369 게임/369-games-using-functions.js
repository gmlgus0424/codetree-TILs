//정수 a와 b가 주어지면, a이상 b이하 수들 중 3, 6, 9 중에 하나가 들어가 있거나 그 숫자 자체가 3의 배수인 숫자의 개수를 세는 프로그램을 작성해보세요.
 //단, 함수를 이용하여 문제를 해결해주세요.
 
//일단 1 부터 100까지 숫자 i  잡기 
//3의 배수이거나
//각 자리에 3, 6, 9가 있는 경우에 check




function sameCheck(n){
    return parseInt(n=== 3, 6, 9);
}



function check(n){
    return n%3 == 0 && sameCheck(n)

}
let cnt= 0;
let j= 0;
for(let i= 0; i<=j; i++){
    if (check(i)){
        cnt++;
    }
}
console.log(cnt)