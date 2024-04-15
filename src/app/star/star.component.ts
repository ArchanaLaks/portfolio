import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent implements OnInit {

ngOnInit(): void {
}

div1clicked:boolean=true;
div2clicked:boolean=false;
div3clicked:boolean=false;
activeTag:string='tag1';
changingstyle(tag:string){
  this.reset();
  this.activeTag=tag;
  switch(tag){
    case 'tag1':
      this.div1clicked =true;
      break;
    case 'tag2':
      this.div2clicked =true;
      break;
      case 'tag3':
        this.div3clicked =true;
        break;
      default:
        break;
  }
}
reset(){
this.div1clicked=false;
this.div2clicked=false;
this.div3clicked=false;
}

}







// getNumbers(row: number): number[] {
//   const numbers = [];
//   for (let i = 1; i <= row; i++) {
//     numbers.push(i);
//   }
//   return numbers;
// }
// getstars(num : number){
//   for (let i = 1; i<=num; i++){ // i=3    3<5
//     let stars = ''
//     for(let j = 1; j<=i; j++){ // j=2  2<=3
//       stars+= '* ';
//     }
//     console.log(stars);
//   }
// }



// numb: number[] = [];

//   getStars(num: number) {
//     for (let i = 1; i <= num; i++) { // i=1 1<5
//       let row = '';
//       for (let j = 1; j <= num - i; j++) { //j=4 3<4 
//         row += '  '; 
//       }
//       for (let k = 1; k <= i; k++) { //k=1 k<1
//         row += k + ' ';
//       }
//       console.log(row);
//     }
//   }



//   generatePattern(rows: number) {
//     for (let n = 1; n <= rows; n++) {
//       let pattern = '';
//       for (let space = 1; space <= rows - n; space++) {
//         pattern += ' ';
//       }

//       for (let num = 1; num <=n; num++) {
//         pattern += ' ' + num ;
//       }

//       console.log(pattern);

//     }

//   }

//   generatediamond(rows: number) {
//     for (let n = 1; n <= rows; n++) {
//       let pattern = '';
//       for (let space = 1; space <= rows - n; space++) {
//         pattern += ' ';
//       }

//       for (let num = 1; num <=n; num++) {
//         pattern += ' ' + num ;
//       }

//       console.log(pattern);

//     }
//     for(let i = rows-1; i>=1; i--){
//       let pattern = '';
//       for (let space = 1; space <= rows - i; space++) {
//         pattern += ' ';
//       }

//       for (let num = 1; num <=i; num++) {
//         pattern += ' ' + num ;
//       }

//       console.log(pattern);

//     }

//   }
 



  



