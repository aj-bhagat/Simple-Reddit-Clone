export class Article{
    title: string;
    link: string;
    votes:number;
    
    constructor(title: string, link: string, votes?:number){
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
    voteup():void {     
        this.votes+=1;
      }
    
    votedown():void {
        this.votes-=1;
      }

    domain():string {
        try{
            const domainandpath: string=this.link.split('//')[1];
            return domainandpath.split('/')[0];
        }
        catch(err)
        {
            return null;    
        }
    }
}