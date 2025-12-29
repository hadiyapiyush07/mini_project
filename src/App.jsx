import Card from './components/Card'


const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://th.bing.com/th?q=Google+Logo+White+Background&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://th.bing.com/th?q=Apple+Logo+Transparent+Icon&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Bengaluru, India"
  },
  {
    brandLogo: "data:image/webp;base64,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",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 60,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "data:image/webp;base64,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",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 50,
    location: "Chennai, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.Of2MrfKXGN1chuR1adiytQHaHa?w=156&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Platform Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 85,
    location: "Remote"
  },
  {
    brandLogo: "data:image/webp;base64,UklGRhgFAABXRUJQVlA4IAwFAADwJgCdASrSAOoAPp1Mok0lpCciITJJgOATiWdu4XNBELkvx2zA5AMpXYDoA/tP9m9nO3V8wH7Desb6HvOZ6h70APLS9ov9yMqqpXiKEm768r3ghxv98yZU0DPwAkIXDLx8hcMvHyFwy8fIXDLx8hcMvHH6x1VZrOZipwniSiDnXkoLZDxb7eLht9NVcHltsbSvr8lRMB8DeG8v++uVWl3nLuIjIoGZlYFyY5/KVcZfkhbht60SgOk0nSMLKS6BH2Gy1OGKsyHdsxtRe8QrewhOMSVijsuv32YOf2LM3gB+b2qEkB2jSBcilK3VW/cbPYetHJ4Bvk5ltn4Yu1FnUK7nrgAYzZEU435BD9/C4Xw8bUPOy4JfXp926L6dv9IUU7bNlDwjLx8hcMvHyFwy8fIXDLx8hcMvHyFwy8fIXDLvgAD+/x6IAAWnoX+YbCmL9M4zbpPoy2u8DvMbwAE3pBSeO0pbMNntPtN92Ny+imcc5fAhgeFcLybnH6uh2gZtjRhe1SrlBbz+r4pjPYaRwPiayCvEdwAjuBZX5F6tp5DMqmh1CFwBDa3ghpezOU5Mq3chTohuxtIoZ920yS6OtXeG8WFdWK4D1oQ9P1hPu3k9zBwKOcntANoYpBtIR8i8wSet+uWI37HaKRmNHdRKam9x54pCMFuA7IM9BhbB+lba4V/KB+oNuGCCmHvo+KV0z3b3olHE1FZMmVgvGKn79MvpxOO4e1u+bH3ZuYQgfNhfn/g36GdwlLNDnq6oHWGtu47TlGUxkmufvrvvV3mgItvRu+vT/Yy58MtX9DupWmqf97AC1+d0ZkgQBDR+gL9Jthlo1PlvJF8aYOimDfjm/Povuq3R4UQiZMpm62wtZH+Mh5DJGzSDnBm5vbv4+GqJepmf3m+m8QICVt5d9aOqPx4VReqcmuc3fW744HPQ97d9OG/XIW3QnKqCXbzAv4TneOb1i/ekOIfzEPOefzLOKZ27bZKPwfvEbFypxN7nHLGZ/IROMZUIz9NMiYWQeYUTiy26S2rNCl9WmkoripUxOD3CRLmP6OjVhIYMCwzJQsbuSlC9Pg2toJqTRO3Tr3JAa7T+mPjj1NQ0QlS8ZygaXiwfpKk0jyFM5QIS8NyvsEhkosB+Wg1Mei+kfvNN30Lhbe55TMi8fJW8QRymZsKxdsr5TtF6rPFpCDo5rKBRE8PqZ9oiVMD75xAP7d9rCWjpkkMMtMt2wB44xYzVID9Rd6kNwONjrnPAkQROTsNBAbvGab0x/cO4Kkq3LGu08xUy6AofPrRt20/wvywNiMvCba7wEn32y2VbkKhKaLBRqt5M/7fbV5ILS3SnMeTVaPqPCa2J/vGFBjOaF13YH5VcZ0za0sfEzRznNlIkLU3ZduntwhkAuZES3j5KOkO5ossG+8MUDhSZ1og6GHI2GLcLkOiJ16ZZDjDdB1oihxa6C4JSwM1Pc+vfxx8JN3fUDU3oEF2v7T/wiulnxT39uqufkQlHClH8ogNnS6k1r22Cy9uWVFF5nTpf2Oxp1SKrWn8bvVSWtdHzw1UBgJY5MK7/lT5OWKPWVIg0ajtQULDBXbNV8HQlhiEpeGiPtZjmxePfc+w/iwKmV+ej4V8yizGqxZxQXCQZNJrFx6Hxl+O+j/3wxZYhwGGY7tzXhMB52BfV/dWzjQlHAJn/6m7q9vploFmYV1V+hyy/LmfgPvlhv/PjvU9wzx1ZkEAAAAAAAA==",
    companyName: "Microsoft",
    datePosted: "1 month ago",
    post: "Cloud Support Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 55,
    location: "Pune, India"
  },
  {
    brandLogo: "data:image/webp;base64,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",
    companyName: "Tesla",
    datePosted: "2 weeks ago",
    post: "Software Engineer – Automation",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 48,
    location: "Bengaluru, India"
  },
  {
    brandLogo: "data:image/webp;base64,UklGRsgEAABXRUJQVlA4ILwEAABwJQCdASrJAOoAPp1MokwlpCMiIdLqYLATiWlu4W5xG/OH8m/0ntU/xldv/p/MD+ufg7577WX+P3trk/9T/y32yc6HbYca1Hb53H+X5Vvo72EP1m6u/7gewf+sAvX8EA07Pvmtn3zWz769QNVVVVVVVVVVVVVVVVVVVVVVVVVQsm3ht/yX9Rx/+J/jQNVVTuEOHdtQKdQfQMxZYHERERDnn4w5hE4pX9X3mrasDWREREQ7Esey3kgqlEgflURTwSR6x1nenEqcDU13jWnkDadNUs92TAQqXgXwz/2VRdXU02vtx6Szu6BFH5E+EAqiEBlZAlFVGkyb4uIniULgE3BYwCvT9p6exLPqsQs3jYTdSEpjTn+QiIiIiIiIiIiIiHf50fPWpeLwRNi2nFA6bIiIiIiG4AD+yYtKePtr/QLKQpJpXM9vmSAAIS1u95VQG3WvvEP3phefXS4M7aIxf7uzdDIsfss1VM0zDHrliQswLf6mhkPQ2qdha7goTEESdAa21JLQYKRydh6BoBRKK4lbop0yK/Ou8ZunkHDnALkyWpUeY1S/h3APvokEKK+Arjpvq6QvoXaWQVZz2RX9pkiTFay60dC27a70mzi/ERv9ZFrSHqIZfRUEHKLh0Wy5FqZWUekNgPHI4eqmpDQfaNRGCpxkmIcDvlFce2+WRNsCHNSOKGOuv+AuIGMCONGJUD8IO9g3IcKQROgumGO3HpNalRzLpyq1K2R5eQAiW7156XCWjhXqtnS+WMUHlHzbJxhDB5N8xW575fEb6hw7mGfCWZadfRjSKjx3u1jWB9zRCk0mL8Bb2TndTaH0/nZFtN5QJNZ4ZNL9yf6o5vxJOioofvirn1ee4xly7//CY1Ts4HJ2mBJNN8xfeqyE7sFl1i6V07/R4rFjateyuv2ZDbngqTUJJAFVJo59xPDmco3iQvbOAOz+LuYwuwum4joBXId2MfWrpRwtlxOH8hOV1BKvTT1zqmkSlkqkvMoSlUDndERJOpsvTUcyXqtdtAoQ7KSo9tzYzPG8LATbgiZFkcf8Q7JvzST41XN79PBRHfZme/5foWw9e/p/X4uNVh4NXc0Xh1s0j+WaSZacosblOOpvtxNzij6JHAV05iZXPvku0fwpnzPxUQU0XMQFqhYTxA/auqglmQkNmfrNahINoQYhiXJ+in/5h0jE76ot8wZVCL/lqG7ckAb/l8IotLyni6FOo/ZwYPXefnvfeZ1I/P/jFz0D3oR/5ooSxiJft4C1+dSmErE/eBX5f+/9qVKM7J7fubfJDOADVNc3yl6o5T6wgHJuUHdTez3CRowB1qGI0eTVevrfg2/58mSeUYye31VOzruh/DizA72pyLU7NbPDtl6tn3bKI8CU6MVjtKBo+lOe8OMUwUk+n6XaY5UqOQ9GNfPvkXk9WnH62RwK9fmnJhOi/nH46WSmXcF/1lTR2KhwmozzGslZUUH4agTQ9GNvs8aRrJaepB5srE5henxayFG/pd9/WaH2msl21M4fndsp4+aigVXYr5trRT2HMtZPD1lqEM7HqpZj7ZTOQbqR8GoHLX9dvHMxGQTC3YB5yK5cqSY/6jCzYz6cLVbcjiWcVHAFaINEpSQIAAA=",
    companyName: "Uber",
    datePosted: "6 days ago",
    post: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 58,
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.3Hp8iRmblKVcbBgTSDXfRAHaE8?w=235&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    companyName: "Airbnb",
    datePosted: "3 weeks ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: 65,
    location: "Remote"
  },
  {
    brandLogo: "https://th.bing.com/th/id/OIP.9y0ZbD3TBd9-X8FDI26W5gHaHa?w=181&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    companyName: "Oracle",
    datePosted: "10 days ago",
    post: "Database Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 52,
    location: "Noida, India"
  }
];

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return <div  key={idx}>
          <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} 
        pay={elem.pay} loc={elem.location} date={elem.datePosted} logo={elem.brandLogo}/>
        </div>
      })}
    </div>
  )
}

export default App
