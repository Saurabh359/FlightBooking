export class Feedback{
    name: string;
    image: string;
    feed: string;
    rating: number;
    date: Date; 

    constructor(name: string,image: string, feed: string, rating: number, date: Date){
        this.name=name;
        this.image=image;
        this.feed=feed;
        this.rating=rating;
        this.date=date;
    }
}