import Form from 'next/form';


const Search = () => {
  return (
    <Form action="/products-db">
        <input type="text" name="query" className="px-2 py-1 "/>
        <button type="submit">Search</button>
    </Form>
  )
}
export default Search