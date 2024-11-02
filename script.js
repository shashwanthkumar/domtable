function fun(){
    let user=prompt("enter user name:-")
    let p=document.getElementsByTagName("p")[0]
    p.innerText=`${user}`
    
}

let tab=document.createElement("table")
document.body.appendChild(tab)

tab.style.border="3px groove red"
tab.style.fontSize="20px"

let th1=document.createElement("th")
tab.appendChild(th1)
th1.innerText="s.no"
let th2=document.createElement("th")
tab.appendChild(th2)
th2.innerText="Name"
let th3=document.createElement("th")
tab.appendChild(th3)
th3.innerText="age"
let th4=document.createElement("th")
tab.appendChild(th4)
th4.innerText="gender"
let th5=document.createElement("th")
tab.appendChild(th5)
th5.innerText="city"


let arr=[1,2,3,4,5]
let name_arr=["Lucky","Shashwanth","Yammani","Kumar","Vijay"]
let ages=[20,21,22,23,24,25]
let gender=["M","M","M","M","M"]
let city=["kurnool","c-camp","kondareddy bridge","one-town","jagannatha gattu"]
for (i=0;i<arr.length;i++){
    let row=document.createElement("tr")
    tab.appendChild(row)
    let data=document.createElement("td")
    row.appendChild(data)
    data.innerText=arr[i]
    let data1=document.createElement("td")
    row.appendChild(data1)
    data1.innerText=name_arr[i]
    let age=document.createElement("td")
    row.appendChild(age)
    age.innerText=ages[i]
    let gen=document.createElement("td")
    row.appendChild(gen)
    gen.innerText=gender[i]
    let cy=document.createElement("td")
    row.appendChild(cy)
    cy.innerText=city[i]
}

console.log(tab)

