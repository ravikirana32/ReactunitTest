import {types} from '../../Actions/Types';
import Reducer from './Reducer';

describe("Post reducer",()=>{
    it("should return default state",()=>{
        const newstate=Reducer(undefined,{});
        expect(newstate).toEqual([])
    })

    it("should return data",()=>{
        const posts=[
            {title:'ravi'},
            {title:'ravi2'},
            {title:'ravi3'},
            {title:'ravi4'},
            {title:'ravi5'}
        ];
        const newstate=Reducer(posts,{
            type:types.GET_POSTS,
            payload:posts
        });
        expect(newstate).toEqual(posts)
    })
})