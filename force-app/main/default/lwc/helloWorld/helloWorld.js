import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName='Souptik Dey';
    age=26;
    friends={
        firstFriend:'Raja',
        secondFriend:'Samuel',
        thirdFriend:'Rituraj',
        home:['Rishra','Talandu','Rishra2']
    }
    userList=['A','B','C','D'];
    title="teacher";
    titleChangeHandler(event){
        this.name.fName=event.target.value;
    }
    nameChangeHandler(event){
        this.name.lName=event.target.value;
    }
    
    @track name={
        fName:"",
        lName:""
    }
   @track calculator={
        fNumber:"",
        sNumber:"",
        sResult:"",
        mResult:""
    }
    fNumberHandler(event){
        this.calculator.fNumber=event.target.value;
    }
    sNumberHandler(event){
        this.calculator.sNumber=event.target.value;
    }
    get multiplicationHandler(){
        this.calculator.mResult= this.calculator.fNumber * this.calculator.sNumber;
        return this.calculator.mResult;
    }
    status="";
    isVisible=false;
    handleClick(event){
        this.status=event.target.value;
        console.log(this.status);
    }
    get buttonHandler(){
        return this.status==='clicked';
    }

}