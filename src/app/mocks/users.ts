import { User } from "../models/github.user";


const userlist: User[]= [
    {
        name: 'esfand',
        company: 'PWH',
        location: 'Durham, UK',
        bio: 'I make videos on my favourite technologies. Go Angular!',
        avatar_url: 'http://i.imgur.com/jav62p6.jpg',
        email: ''
    },
    {
        name: 'saeed',
        company: 'Doe and Co.',
        location: 'London, UK',
        bio: 'I love open source!',
        avatar_url: 'http://i.imgur.com/TzWcihb.png'
    }

];

export const USER_LIST = userlist;