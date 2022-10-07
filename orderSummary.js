var tellimus = { 
    "id": 2113, 
    "orderNumber": "E210126001", 
    "createdAt": "2021-01-26 16:04:24", 
    "clientName": "Kalle Tali", 
    "deliveryType": "Omniva smartpost", 
    "deliveryValue": 178, 
    "rows": [ 
      { 
        "article_id": 31, 
        "name": "Kohvimasin De'Longhi Dolce Gusto Piccolo EDG100.W", 
        "product_code": "257549", 
        "price": 49.1666666667, 
        "amount": 1, 
        "vat": 0.2 
      }, 
      { 
        "article_id": 23420, 
        "name": "Kohvikapslid Nescafe Dolce Gusto Espresso Intenso, 128 g, 16 tk", 
        "product_code": "355836", 
        "price": 5.0666666667, 
        "amount": 2, 
        "vat": 0.2 
      }, 
      { 
        "article_id": 23421, 
        "name": "Kohvikapslid Nescafe Dolce Gusto Latte Macchiato, 194 g, 16 tk", 
        "product_code": "000000000501267301", 
        "price": 5.825, 
        "amount": 1, 
        "vat": 0.2 
      } 
    ] 
  } 
let kogusumma = 0
for (i=0; i<tellimus.rows.length;i++) {
    index=i
    if (index>=0) {
    console.log(`Toote nimi: ${tellimus.rows[index].name} ; Toote kogus: ${tellimus.rows[index].amount} ; Toote koguhind: ${Math.round(tellimus.rows[index].price * ( 1 + tellimus.rows[index].vat)) * tellimus.rows[index].amount * 100 / 100}€`)
    kogusumma = kogusumma + Math.round(tellimus.rows[index].price*1.2)*tellimus.rows[index].amount*100/100
    }
}
console.log(`Kogusumma on ${kogusumma}€`)