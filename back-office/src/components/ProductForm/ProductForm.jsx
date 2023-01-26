export default function ProductForm() {

    function handleSubmit(event) {
      event.preventDefault();

      // Read the form data
      const form = event.target;
      const formData = new FormData(form);

      // You can pass formData as a fetch body directly:
      // fetch('/some-api', { method: form.method, body: formData });

      // Or you can work with it as a plain object:
      const formJson = Object.fromEntries(formData.entries());
      
      fetch('http://localhost:9000/product/create', {
        method: "GET",
      })
      .then((response) => {
        console.log(response);
        return response.json(); // do something with response JSON
      })
      .catch((error) => {
        console.error(error);
      });
    }

    return (
        <div>
            <h1>Ajouter un produit</h1>

            <form onSubmit={handleSubmit} method="post" className="flex flex-col">
              <label htmlFor="name">Nom</label>
              <input className="border" type="text" name="name" id="name"/>
              <label htmlFor="weight">Poids</label>
              <input className="border" type="text" name="weight" id="weight"/>
              <label htmlFor="nutrition">Nutrition</label>
              <input className="border" type="text" name="nutrition" id="nutrition"/>
              <label htmlFor="price">Prix</label>
              <input className="border" type="text" name="price" id="price"/>
              <label htmlFor="origin">Origine</label>
              <input className="border" type="text" name="origin" id="origin"/>
              <button type="submit">Ajouter</button>
            </form>
        </div>
    )
}