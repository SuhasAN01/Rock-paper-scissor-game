import { Component } from '@angular/core';

@Component({
  selector: 'app-main-com',
  templateUrl: './main-com.component.html',
  styleUrls: ['./main-com.component.css']
})
export class MainComComponent {
start_but:boolean=false;

start_game(){
  this.start_but = true;
}

user:number=0;
num:number=0;
res:number=0;

t_match:number=0;

h_win:number=0;
h_draw:number=0;
h_loss:number=0;

m_win:number=0;
m_draw:number=0;
m_loss:number=0;

ppr:boolean=false;
rck:boolean=false;
scr:boolean=false;


OverallWinner:string="";
human_res:string="";
machine_res:string="";

left_img_url:string="assets/images/left_paper.jpg";
right_img_url:string="assets/images/right_paper.jpg";


paper(){
this.num=Math.floor(Math.random()*3)+1;
this.user=10;
this.res=this.user+this.num;
this.final_result(this.res);
}

rock(){
  this.num=Math.floor(Math.random()*3)+1;
  this.user=20;
  this.res=this.user+this.num;
  this.final_result(this.res);
}

sci(){
  this.num=Math.floor(Math.random()*3)+1;
  this.user=30;
  this.res=this.user+this.num;
  this.final_result(this.res);
}

hwin:string="";
mwin:string="";
draw:string="";


final_result(a:number){
  if(this.t_match<5){
      switch(a){
              case 11:
                      this.pap_win();
                      break;
              case 12:
                      this.pap_loss();
                      break;
              case 13:
                      this.pap_draw();
                      break;
              case 21:
                      this.rock_win();
                      break;
              case 22:
                      this.rock_loss();
                      break;
              case 23:
                      this.rock_draw();
                      break;
              case 31:
                      this.sci_win();
                      break;
              case 32:
                      this.sci_loss();
                      break;
              case 33:
                      this.sci_draw();
                      break;

                      }
  }else{

    this.start_but=false;
    this.t_match=0;
  this.h_loss=0;
  this.h_draw=0;
  this.m_win=0;
  this.m_loss=0;
  this.m_draw=0;
  this.h_win=0;
  this.m_win=0;
  this.user=0;
  this.num=0;
  this.res=0;
  this.ppr=false;
  this.rck=false;
  this.scr=false;
  alert("Match Over")
  }

}
pap_win(){
this.t_match=this.t_match+1;
this.h_win=this.h_win+2;
this.m_loss=this.m_loss+1;
this.ppr=true;
this.scr=true;
this.rck=false;

this.hwin="yellow";
  this.mwin="white";
this.left_img_url="assets/images/left_paper.jpg"
this.right_img_url="assets/images/right_rock.jpg"
}
pap_draw(){
  this.t_match=this.t_match+1;
  this.m_draw=this.m_draw+1;
  this.h_draw=this.h_draw+1;
  this.ppr=false;
  this.scr=true;
  this.rck=true;
  this.hwin="orange";
  this.mwin="orange";
  this.left_img_url="assets/images/left_paper.jpg"
  this.right_img_url="assets/images/right_paper.jpg"
}
pap_loss(){
  this.t_match=this.t_match+1;
  this.m_win=this.m_win+2;
  this.h_loss=this.h_loss+1;
  this.ppr=true;
  this.scr=false;
  this.rck=true;
  this.hwin="white";
  this.mwin="yellow";
  this.left_img_url="assets/images/left_paper.jpg"
  this.right_img_url="assets/images/right_sci.jpg"
}
rock_win(){
  this.t_match=this.t_match+1;
  this.h_win=this.h_win+2;
  this.m_loss=this.m_loss+1;
  this.ppr=true;
  this.scr=false;
  this.rck=true;
  this.hwin="yellow";
  this.mwin="white";
  this.left_img_url="assets/images/left_rock.jpg"
  this.right_img_url="assets/images/right_sci.jpg"
}
rock_draw(){
  this.t_match=this.t_match+1;
  this.m_draw=this.m_draw+1;
  this.h_draw=this.h_draw+1;
  this.rck=false;
  this.ppr=true;
  this.scr=true;
  this.hwin="orange";
  this.mwin="orange";
  this.left_img_url="assets/images/left_rock.jpg"
  this.right_img_url="assets/images/right_rock.jpg"
}
rock_loss(){
  this.t_match=this.t_match+1;
  this.m_win=this.m_win+2;
  this.h_loss=this.h_loss+1;
  this.ppr=false;
  this.scr=true;
  this.rck=true;
  this.hwin="white";
  this.mwin="yellow";  
  this.left_img_url="assets/images/left_rock.jpg"
  this.right_img_url="assets/images/right_paper.jpg"  
}
sci_win(){
  this.t_match=this.t_match+1;
  this.h_win=this.h_win+2;
  this.m_loss=this.m_loss+1;
  this.ppr=false;
  this.scr=true;
  this.rck=true;

  this.hwin="yellow";
  this.mwin="white";
  this.left_img_url="assets/images/left_sci.jpg"
  this.right_img_url="assets/images/right_paper.jpg"  
}
sci_draw(){
  this.t_match=this.t_match+1;
  this.m_draw=this.m_draw+1;
  this.h_draw=this.h_draw+1;
  this.scr=false;
  this.ppr=true;
  this.rck=true;
  this.hwin="orange";
  this.mwin="orange";
  this.left_img_url="assets/images/left_sci.jpg"
  this.right_img_url="assets/images/right_sci.jpg"
}
sci_loss(){
  this.t_match=this.t_match+1;
  this.m_win=this.m_win+2;
  this.h_loss=this.h_loss+1;
  this.ppr=true;
  this.scr=true;
  this.rck=false;
  this.hwin="white";
  this.mwin="yellow";
  this.left_img_url="assets/images/left_sci.jpg"
  this.right_img_url="assets/images/right_rock.jpg" 
}


}
