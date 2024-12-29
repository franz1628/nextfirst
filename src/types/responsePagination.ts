export class ResponsePagination<T> {
    data : T 
    total:number
    page:number
    limit:number
    totalPages: number

    constructor(data:T,total:number,page:number,limit:number,totalPages:number){
        this.data = data;
        this.total = total;
        this.page = page;
        this.limit = limit;
        this.totalPages = totalPages;
    }
}