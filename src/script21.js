// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest

// CRUD

// R - GET
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//   C - POST

// const options = {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "Hello from JS",
//     body: "qweryuiqWAERTY",
//     userId: 12,
//   }),
// };

//-----------------------------------------------------
// const options = {
//   method: 'POST',
//   body: JSON.stringify({
//     name: 'Test user',
//     age: 18,
//   }),
//   headers: {
//     'Content-type': 'application/json',
//   },
// };
// fetch('https://someURL', options);

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(json => console.log(json));

//POST -CREATE

// const post = {
//   title: 'Group 85',
//   body: 'First post group 85',
//   userId: 101,
// };

// const options = {
//   method: 'POST',
//   body: JSON.stringify(post),
//   headers: {
//     'Content-type': 'application/json',
//   },
// };

// fetch('https://jsonplaceholder.typicode.com/posts', options)
//   .then(resp => {
//     console.log(resp);
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }
//     return resp.json();
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

//PUT PATCH ---------------------------------------

// const DB = {
//   id: 1,
//   title: 'Some title',
//   body: 'Some body',
//   userId: 101,
// };

// const req = {
//   title: 'New value',
// };

// const result = {
//   id: 1,
//   title: 'Newvalue ',
//   body: 'Some body',
//   userId: 101,
// };

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(json => console.log(json));

// const options = {
//   method: 'PUT',
//   body: JSON.stringify({
//     title: 'Group 85',
//     userId: 102,
//   }),
//   headers: {
//     'Content-type': 'application/json',
//   },
// };

// fetch('https://jsonplaceholder.typicode.com/posts/1', options)
// .then(resp => {
//   console.log(resp);
//   if (!resp.ok) {
//     throw new Error(resp.statusText);
//   }
//   return resp.json();
// })
// .then(data => console.log(data))
// .catch(err => console.log(err));

// const options = {
//   method: 'DELETE',
// };

// fetch('https://jsonplaceholder.typicode.com/posts/1', options)
//   .then(resp => {
//     console.log(resp);
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }
//     return resp.json();
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// fetch('https://jsonplaceholder.typicode.com/posts',options)
// .then(resp =>{
//     if(!resp.ok){
//         throw new Error(resp.statusText)
//     }
//     return resp.json()
// })
// .then(data => console.log(data))
// .catch(err => console.log(err))

// const addPost = document.querySelector('.js-add');
// const listPosts = document.querySelector('.js-posts');
// const formWrapper = document.querySelector('.js-form');
// const errMessage = document.querySelector('.js-error');

// addPost.addEventListener('click', handlerAddPost);

// function handlerAddPost() {
//   formWrapper.innerHTML = `<form action="submit" class="js-form-add" style:"style="display: flex; flex-direction: column"
// "  >
//         <input type="text" name="name">
//         <textarea name="description" cols="30" rows="10"></textarea>
//         <button>Додати пост</button>
//     </form>`;

//   const form = document.querySelector('.js-form-add');
//   form.addEventListener('submit', handlerFormSubmit);
// }

// function handlerFormSubmit(evt) {
//   evt.preventDefault();
//   //   const data = new FormData(evt.currentTarget)
//   //   for (var key of data.keys()) {
//   //     console.log(key);
//   //  }
//   //   console.log();
//   // data.forEach(elem => console.log(elem))

//   //   const { name, description } = evt.currentTarget.elements;

//   const {
//     name: { value: title },
//     description: { value: body },
//   } = evt.currentTarget.elements;
//   //   const data = {
//   //     title: name.value,
//   //     body: description.value,
//   //   };
//   const data = { title, body };

//   addPostService(data)
//     .then(obj => {
//       listPosts.insertAdjacentHTML('beforeend', createPostMarkup(obj));
//       // listPosts.innerHTML = createPostMarkup(obj)
//     })
//     .catch(() => {
//       errMessage.innerHTML = 'Не можливо додати пост';
//     })
//     .finally(() => {
//       formWrapper.innerHTML = '';
//       setTimeout(() => {
//         errMessage.innerHTML = '';
//       }, 2000);
//     });
// }

// function createPostMarkup({ id, title, body }) {
//   return `<li data-id="${id}">
//     <h2>${title}</h2>
//     <p>${body}</p>
//     </li>`;
// }

// function addPostService(data) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   };

//   return fetch('https://jsonplaceholder.typicode.com/posts', options).then(
//     resp => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }
//       return resp.json();
//     }
//   );
// }

// ПЕРЕРВА ДО 21.25

// U PUT PATCH

// PUT
// {
//     id:101,
//     title: 'Hello fish',
//     body: "Hello dog",
//     userId : 1
// }

// {
//     id:101.
//     title: 'Hello fish'
// }

//PATCH

// {
//     id:101,
//     title: 'Hello fish',
//     body: "Hello dog",
//     userId : 1
// }

// {
//     id:101.
//     title: 'Hello fish'
// }

// const options = {
//   method: "PUT",
//   body: JSON.stringify({
//     id: 1,
//     title: "cat",
//   }),
//   headers: {
//     "Content-type": "application/json",
//   },
// };

// fetch('https://jsonplaceholder.typicode.com/posts/1',options)
// .then(resp => resp.json()).then(data => console.log(data));

// const options = {
//     method: "PATCH",
//     body: JSON.stringify({
//       id: 1,
//       title: "cat",
//       body : 'Hello dear cat',
//     }),
//     headers: {
//       "Content-type": "application/json",
//     },
//   };

//   fetch('https://jsonplaceholder.typicode.com/posts/1',options)
//   .then(resp => resp.json()).then(data => console.log(data)).then(err => console.log(err));

// const options ={
//     method: "DELETE"
// }
// fetch('https://jsonplaceholder.typicode.com/posts/1',options)
// .then(resp => console.log(resp))

// const form = document.querySelector('.js-question');
// const getBtn = document.querySelector('.js-get-all');

// form.addEventListener('submit', handlerQuestion);
// getBtn.addEventListener('click', handlerGetQuestions);

// function handlerQuestion(evt) {
//   evt.preventDefault();
//   const { userName, phone, email, question } = evt.currentTarget.elements;
//   const request = {
//     name: userName.value,
//     phone: phone.value,
//     email: email.value,
//     comment: question.value,
//   };
//   serviceQuestion(request)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(() => evt.target.reset());
// }

// function handlerGetQuestions(evt) {
//   serviceGetQuestions()
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// }

// function serviceQuestion(data) {
//   const options = {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-type': 'application/json',
//     },
//   };

//   return fetch('https://jsonplaceholder.typicode.com/posts', options).then(
//     resp => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }
//       return resp.json();
//     }
//   );
// }

// function serviceGetQuestions() {
//   return fetch('https://jsonplaceholder.typicode.com/posts').then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }
//     return resp.json();
//   });
// }

// async function serviceCountry() {
//   const response = await fetch('https://restcountries.com/v3.1/name/Ukraine');

//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }
//   const data = await response.json();
//   //   console.log(data);
//   //   console.log('hello');
//   return data;
// }

// serviceCountry()
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// async function serviceCountry() {
//   try {
//     const response = await fetch('https://restcountries.com/v3.1/name/Ukraine');

//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     const data = await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// }

// serviceCountry();

// async function serviceCountries() {
//   //   const resp1 = await fetch('https://restcountries.com/v3.1/name/Ukraine');
//   //   const resp2 = await fetch('https://restcountries.com/v3.1/name/France');
//   //   const resp3 = await fetch('https://restcountries.com/v3.1/name/Poland');
//   const countries = ['Ukraine', 'France', 'Poland'];
//   const responses = countries.map(async country => {
//     const resp = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//     return resp.json();
//   });
// }
// serviceCountries();

// const serviceCountry = async () => {
//   const response = await fetch('https://restcountries.com/v3.1/name/Ukraine');

//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }
//   const data = await response.json();
//   console.log(data);
// };

// serviceCountry();

// const serviceCountry = async function () {
//   const response = await fetch('https://restcountries.com/v3.1/name/Ukraine');

//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }
//   const data = await response.json();
//   console.log(data);
// };

// serviceCountry();

// const service = {
//   countryName: 'Ukraine',
//   async serviceCountry() {
//     const response = await fetch(
//       `https://restcountries.com/v3.1/name/${this.countryName}`
//     );
//     console.log(response);
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     const data = await response.json();
//     console.log(data);
//   },
// };

// service.serviceCountry();

const elements = {
  form: document.querySelector('.js-search'),
  formContainer: document.querySelector('.js-form-container'),
  addfield: document.querySelector('.js-add'),
};

elements.addfield.addEventListener('click', handlerAdd);

elements.form.addEventListener('submit', handlerSearch);

function handlerAdd() {
  elements.formContainer.insertAdjacentHTML(
    'beforeend',
    '<input type="text" name="country" />'
  );
}

async function handlerSearch(evt) {
  evt.preventDefault();

  const formData = new FormData(evt.currentTarget);
  const countries = formData
    .getAll('country')
    .map(item => item.trim())
    .filter(item => item);

  const capitals = await serviceCountries(countries);
  const weather = await serviceWeather(capitals);
  console.log(weather);
}

async function serviceCountries(countries) {
  const BASE_URL = 'https://restcountries.com/v3.1/name/';
  const responses = await countries.map(async country => {
    const response = await fetch(`${BASE_URL}${country}`);
    return response.json();
  });

  const data = await Promise.allSettled(responses);

  return data
    .filter(({ status }) => status === 'fulfilled')
    .map(({ value }) => value[0].capital[0]);
}

async function serviceWeather(capitals) {
  const BASE_URL = 'http://api.weatherapi.com/v1';
  const END_POINT = '/current.json';
  const API_KEY = '996939ba8c804529aee100853241011';

  const responses = await capitals.map(async capital => {
    const response = await fetch(
      `${BASE_URL}${END_POINT}?key=${API_KEY}&q=${capital}&lang=uk`
    );
    return response.json();
  });

  const data = await Promise.allSettled(responses);

  return data
    .filter(({ status }) => status === 'fulfilled')
    .map(
      ({
        value: {
          current: {
            temp_c,
            condition: { text, icon },
          },
          location: { country, name },
        },
      }) => ({
        country,
        name,
        text,
        icon,
        temp_c,
      })
    );
}
