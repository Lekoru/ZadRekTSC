import React from "react";
import {Button, Grid} from "@mui/material";
import {Link} from "react-router-dom";

const url ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAA1NJREFUaEPtV1tIVFEUXaOpiUUqDWUTKqhloH1kCdmDgowykrAQH2hq4SPfDb0+IiSoCEbN1BklCZXUrCQ0xKKgfEWafQSZFIJBUTgfPqImnxNnQEmbM9577r0Zdc7v3XufvfZaZ+99VXcmG8z4B46KA/nLWOSM/GWEgDPCGVGoAlxaChWWOSxnhLl0CjlyRhQqLHPY/5eRT28/ouRYMd53vaNWz3ujN3JrtVizXvObTV9nH4riCmD8YLTq77zcGZmV2dgSHiyKHdGMmM1mdNS1o/yEAaavJuplEecOI/JCFOyX2M/ajBpHUZamR9f9F1S/qLxoHDoTMcdPCCLRQEjQibEJ1J6/hab8Ruodai81tPWn4RPkY7GZnprGg4JGVJ+tovoQFlL0qVixylVI7nNsmICQCMNfhqFPLsGr5h7qpaHJe5GgS4KjsyP6e/qhi7xKlRQBnlWdC/8Qf9EgiAMzEOLc2/oGxYlFNvWurT8F382+KEsz4PndTmqSiflJ2J95ACqV6s8DESKXTWFB0PhrbMpwz/FQJOgS4eSylAmEZEZIANPod1Rk38Cz6qdMSfgFr0N6RQY0G9Yy+c84SZLWTBAhLdlalqTVJpemYlvUdmZJyQpEaEueD+bgyXBEX4yFg5ODJDZkkdZMBkJa8q/ZBuwKQGZlDtw17pJByApkanIK9Xl1aLh8T1BipAmklafDdbX4mWHtAlneCAnc3diF60ev2Zz28xOwNv0FVcGKkSxAjAODKIovBNmjxBzWvUoRRsZN45a1o6WkWQyGWVvSfsmS6OHnweQvW9fquN2OslQ9VVLkLaz0VOORoYWa6L70MMRdibesMqxHkrQWmh9kf8q4mQW1p9qm9OSYJ8xAxr79sEjqoZ5e6dhLcSCzws7eDk8qHluYox2pE54JCBmAbTWtli5FO/Pb68jgCAwppXjZ1E31kbJzMQEhkiqMzcfA6wGrSbl5uCGrKgcBuwPnfBfSosnD3xGzU/TKIhqIkCWR9pcnxJcsj7k1WngFeol696KAEEktpPWFJnZvWy8KY3QY+jxETXTrkRDLn6KL2zLBYEQBERx1EQw5kEUous0rOSOcEYUqwKWlUGGZw3JGmEunkCNnRKHCMofljDCXTiHHnwFayaqwKel4AAAAAElFTkSuQmCC'

const pages = ['Zad1', 'Zad2']
export const NavBar = () => {

  return (
    <>
      <Grid container sx={{margin: '0 0 1.5dvh 0'}}>
        <Grid container item xs={12} sx={{backgroundColor: '#0d6efd'}} alignContent={'center'}>
          <Grid item xs={1}>
            <Link to='/'>
              <img style={{margin: '0 0 0 1dvw', padding: '0.5dvh 0', borderRadius: '50%'}} src={url} alt={'Logo'}/>
            </Link>
          </Grid>
          <Grid item xs={11} container justifyContent={'flex-end'} alignContent={'center'}>
            { pages.map((page: string) => {
              return (
                <Grid item key={page} sx={{ height: '100%'}}>
                  <Link to={`/${page}`}>
                      <Button sx={{color: 'white', textDecoration: 'none', height: '100%'}}>{page}</Button>
                  </Link>
                </Grid>
              )
            })
            }
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}