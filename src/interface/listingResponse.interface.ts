export interface ListResponse<type>{
    data:[]
    results:number
    metadata:MetaData

}
export interface MetaData{
    currentPage:number
    limit:number
    numberOfPages:number
}