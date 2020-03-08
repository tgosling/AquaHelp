import React from "react";
import Page from "../Page/Page";
import IndoorPool from "./IndoorPool";
import {CardDeck} from 'reactstrap';

const pools = [
    {
      photo: "https://media-cdn.tripadvisor.com/media/photo-s/0f/44/53/04/inside-view-of-the-deep.jpg",
      title: "Canada Games Aqautic Center",
      address: "1045 Wonderland Rd North",
      phone: "(519) 661-4455",
      schedule: () => {
        console.log("Schedule");
      },
      book: () => {
        console.log("Book");
      }
    },
    {
      photo: "https://scontent.fyyz1-2.fna.fbcdn.net/v/t31.0-8/14379892_1117412121676503_704683501666345281_o.jpg?_nc_cat=107&_nc_ohc=9eaI1MjW1-oAX-FCrJ_&_nc_ht=scontent.fyyz1-2.fna&oh=51e89bd40eed57c0adeb8f4d570bb378&oe=5EBE19BD",
      title: "Carling Heights Optimist Community Center",
      address: "656 Elizabeth St",
      phone: "(519) 661-2523",
      schedule: () => {
        console.log("Schedule");
      },
      book: () => {
        console.log("Book");
      }
    },
    {
      photo: "https://1.bp.blogspot.com/_XgElt6Kl0rs/TOQ-grDGVgI/AAAAAAAAABk/R5JTUClfnyg/s1600/Jr.HighSwimmingNov16th2010.JPG",
      title: "South London Community Pool",
      address: "585 Bradley Ave",
      phone: "(519) 661-0920",
      schedule: () => {
        console.log("Schedule");
      },
      book: () => {
        console.log("Book");
      }
    }
  ];

const IndoorPools = () => {
    return(
        <React.Fragment>
        <h3>Indoor Pools</h3>
            <CardDeck>        
                {pools.map((pool, idx) => (                  
                        <IndoorPool pool={pool}/>
                ))}
            </CardDeck>
            </React.Fragment>
    )
}//end IndoorPools

export const indPools = pools;
export default IndoorPools;
