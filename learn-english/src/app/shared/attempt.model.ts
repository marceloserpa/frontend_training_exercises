export class Attempt {
    
    constructor(
        public isFull: boolean,
        private urlFullLife = "assets/full_life.png",
        private urlEmptyLife =  "assets/empty_life.png",
    ){}

    get url(){
        if(this.isFull){
            return this.urlFullLife;
        } else {
            return this.urlEmptyLife;
        }
    }

}