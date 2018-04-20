REACT RAILS
===========

Esse repositório tem dois projetos semelhantes: item e product.

## Somente gem react-rails, 2 sistemas

Abra um primeiro terminal e execute:
```bash
https://github.com/ismaeltiago/projects-react-rails.git
~projects-react-rails: git checkout only-react-rails
~projects-react-rails: cd item
~projects-react-rails/item: bundle install
~projects-react-rails/item: npm install
~projects-react-rails/item: rails s
```

http://localhost:3000


Abra um segundo terminal e execute:
```bash
~projects-react-rails: cd product
~projects-react-rails/product: bundle install
~projects-react-rails/product: npm install
~projects-react-rails/product: rails s -p 3001
```

http://localhost:3001


## Redux, frontend e backend juntos

Abra um primeiro terminal e execute:
```bash
https://github.com/ismaeltiago/projects-react-rails.git
~projects-react-rails: git checkout redux-todomvc-load-todos
~projects-react-rails: cd item
~projects-react-rails/item: bundle install
~projects-react-rails/item: npm install
~projects-react-rails/item: rails s
```

http://localhost:3000


## Redux, frontend e backend separados

Abra um primeiro terminal e execute:
```bash
https://github.com/ismaeltiago/projects-react-rails.git
~projects-react-rails: git checkout redux-todomvc-load-todos
~projects-react-rails: cd item
~projects-react-rails/item: bundle install
~projects-react-rails/item: npm install
~projects-react-rails/item: rails s
```

http://localhost:3000


Abra um segundo terminal e execute:
```bash
~projects-react-rails: cd todomvc
~projects-react-rails/todomvc: npm install
~projects-react-rails/todomvc: npm start
```

http://localhost:3006
