import { useState } from "react";
import { Container,Row,Col,Form,Button } from "react-bootstrap";


const Add=()=>{
    const [description, setDescription] = useState("тут пока ничего нет...");
    const [discount, setDiscount]= useState ("0");
    const [name, setName] = useState("");
    const [pictures, setPictures] = useState("https://smallivingworld.ru/800/600/http/ambiance-sticker.com/images/Image/sticker-chiot-avec-un-os-5-ambiance-sticker-KC10452.jpg");
    const [price, setPrice]= useState("0");
    const [stock, setStoke] = useState("100");
    const [tags, setTags] = useState(["new"]);
    const [wight, setWight] = useState("100г");

    return <Container className="bs bg-light text-dark rounded-1 p-4">
        <Row>
            <Col xs={12}>
                <h1>Добавить товар</h1>
            </Col>
        </Row>
        <Form>
            <Row>
                <Col xs={12} sm={6}>
                    <Form.Group className="my-3">
                     <Form.Label htmlFor="name">Название товара</Form.Label>
                      <Form.Control
                       type="text" 
                       id="name"
                       value={name}
                       onChange={(e)=>setName(e.target.value)}/>
                     </Form.Group>

                     <Form.Group className="mb-3">
                     <Form.Label htmlFor="price">Цена</Form.Label>
                     <Form.Control
                      type="number" 
                      id="price"
                      value={price}
                      onChange={(e)=>setPrice(e.target.value)}/>
                     </Form.Group>

                     <Form.Group className="mb-3">
                     <Form.Label htmlFor="discount">Скидка</Form.Label>
                     <Form.Select
                      id="discount"
                      value={discount}
                      onChange={(e)=>setDiscount(e.target.value)}>
                        <option value={0}>Без скидки</option>
                        <option value={5}>5 %</option>
                        <option value={10}>10 %</option>
                        <option value={15}>15 %</option>
                        <option value={20}>20 %</option>
                        <option value={25}>25 %</option>
                        <option value={30}>30 %</option>
                        <option value={35}>35 %</option>
                      </Form.Select>
                     </Form.Group>

                     <Form.Group className="mb-3">
                     <Form.Label htmlFor="wight">Вес</Form.Label>
                     <Form.Control
                      type="text" 
                      id="wight"
                      value={wight}
                      onChange={(e)=>setWight(e.target.value)}/>
                      <Form.Text>Вес прописывать с единицами измерения !!!</Form.Text>
                     </Form.Group>

                     <Form.Group className="mb-3">
                     <Form.Label htmlFor="stock">Количество на складе </Form.Label>
                     <Form.Control
                      type="number" 
                      id="stock"
                      step={10}
                      min={10}
                      max={1000}
                      value={stock}
                      onChange={(e)=>setStoke(e.target.value)}/>
                     </Form.Group>

                     <Form.Group className="mb-3">
                     <Form.Label htmlFor="tags">Теги</Form.Label>
                       <Form.Control
                          type="text" 
                          id="tags"
                          value={tags}
                          onChange={(e)=>setTags(e.target.value)}/>
                   </Form.Group>
                </Col>
                <Col xs={12} sm={6}>
                    <div className="mb-3" style={{
                        backgroundImage: `url(${pictures})`,
                        backgroundSize: "cover",
                        height: "16.1rem",
                        backgroundPosition:"center",
                        backgroundRepeat:"no-repeat"

                    }}></div>
                   <Form.Group className="my-3">
                     <Form.Label htmlFor="pictures">Изображение товара</Form.Label>
                       <Form.Control
                          type="url" 
                          id="pictures"
                          value={pictures}
                          onChange={(e)=>setPictures(e.target.value)}/>
                   </Form.Group>

                   <Form.Group className="mb-3">
                     <Form.Label htmlFor="description">Описание</Form.Label>
                       <Form.Control
                          as="textarea"
                          id="description"
                          value={description}
                          rows={3}
                          onChange={(e)=>setDescription(e.target.value)}/>
                   </Form.Group>
                <Button variant={"outline-primary"} type="submit" className="mt-2">Добавить</Button>
                </Col>
            </Row>
        </Form>
    </Container>
}
                   
    

export default Add;