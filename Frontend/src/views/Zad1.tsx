import React, {useEffect, useState} from "react"
import ListGroup from 'react-bootstrap/ListGroup';
import {Col, Container, Pagination, Row, Spinner} from "react-bootstrap";

const Zad1 = () => {
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  let lastPage = 0
  useEffect(() => {
    const fetchData = async () => {
      const dat = await (await fetch('https://jsonplaceholder.typicode.com/posts')
          .then((res) => res.json()))
      dat.sort((a: any, b :any)=> (a.title > b.title ? 1 : -1))
      localStorage.setItem('posts', JSON.stringify(dat));
      setLoading(true)
    }

    if (!localStorage.getItem('posts')){
      console.log('Downloaded data!')
      fetchData().then()
    } else {
      setLoading(true)
    }
  }, [])

  if(localStorage.getItem('posts'))
  {
    lastPage = JSON.parse(localStorage.getItem('posts')!).length % 10 == 0 ? JSON.parse(localStorage.getItem('posts')!).length / 10 : (JSON.parse(localStorage.getItem('posts')!).length / 10) + 1
  }

  return (
    <>
      <Container fluid>
        <Row className={'justify-content-md-center'} style={{marginBottom: '1dvh'}}>
          <Col xs>
            {loading ?
              <ListGroup>
                <ListGroup.Item as={'li'} active>Titles:</ListGroup.Item>
                {
                  JSON.parse(localStorage.getItem('posts')!).map((item: {id: number, title: string} , index: number) => {
                    if (index > (page - 1) * 10 && index <= page * 10) {
                      return <ListGroup.Item as={'li'} key={item.id}>{item.title}</ListGroup.Item>
                    }
                    return
                  })
                }
              </ListGroup>
              :
              <>
                <Spinner animation="border" />
              </>
            }
          </Col>
        </Row>
        <Row className={'justify-content-md-center'} >
          <Col xs>
            { loading &&
              <Pagination>
              <Pagination.First onClick={() => {setPage(curPage => curPage = 1)}}/>
              <Pagination.Prev onClick={() => {setPage(curPage => {return curPage === 1 ? curPage : curPage - 1})}}/>
                {
                  Array.from(Array(lastPage), (e,i) => {
                    if (i + 1 <= page + 5 && i + 1 >= page - 5  && lastPage > 10){
                      return <Pagination.Item key={i+1} active={page === i+1} onClick={() => {setPage(curPage => curPage = i+1)}}>{i+1}</Pagination.Item>
                    }
                    return <Pagination.Item key={i+1} active={page === i+1} onClick={() => {setPage(curPage => curPage = i+1)}}>{i+1}</Pagination.Item>
                  }) // Responsive pagination showing 5 more and less pagination than current page
                }
              <Pagination.Next onClick={() => {setPage(curPage => {return curPage === lastPage ? curPage : curPage + 1})}}/>
              <Pagination.Last onClick={() => {setPage(lastPage)}}/>
            </Pagination>
            }
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Zad1