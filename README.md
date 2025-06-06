# SELF-LOVE-JOURNEY-WEB

## Step 2.1 Create Project File & Open File in VS Code.2

<< Work on window terminal >>
2.1. Create folder in your assigned drive/folder
2.2 Go to explorer taskbar --> click --> type 'cmd' to open terminal
3. Command: npm create vite@latest
4. You may see the messages below, type y to proceed
        Need to install the following packages:
        create-vite@6.3.0
        Ok to proceed? (y)
5. Terminal displays the following messages asking us to create project name.
In this case, project name is "self-love-journey-web" (front-end)
```plaintext
> npx
> create-vite
|
o  Project name:
|  self-love-journey-web

6. After that, the system will display messages as follows:
|
o  Project name:
|  self-love-journey-web
|
o  Select a framework:
|  React
|
o  Select a variant:
|  JavaScript
|
o  Scaffolding project in D:\00_Study\00_IT Knowledge\Codecamp 19_Offline\Personal Project\self-love-journey_mockup\self-love-journey-web...
|
—  Done. Now run:

  cd self-love-journey-web
  npm install
  npm run dev
```

  7. We follow the instructions, starting with ;
  cd self-love-journey-web
  npm install 

8. Then, type command --> code . to open project in VS Code
    - or you can type 2 commands like this : code .&&npm run dev

9. After that, open terminal in VS code (ctrl+J) then --> npm run dev --> o to open website
Then, the website http://localhost:5173/ will display on browser.


## Step 2 Go to file: package.json
2.1. Look at section "scripts"
-.2This section is about the scripts that instruct the computer to run program.
- From the sample below, 
  Key = dev
  Value = vite
- We type the command 'npm run dev' to run the web

```js
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  ```

## Step 3 Go to file: App.jsx (parent file) under folder: src
--> The contents in this file will be displayed on the website

```plaintext
2.1. Delete all data in this file (ctrl+A+delete)
2.2 Write the following function;
    : App is a component
    : How to name a component: Start with Capital letter
    : Export only 2.1 element to run the program
      - This file ".2pp.jsx" is the parent file.
      - The children files will operate by using the codes in this file.

EX1: Return 2.1 element
======code st.2ucture======
```
```js
function App () {
    // Code body
    // JavaScript
    // Function will return in jsx & return only 2.1 element*.
    // * 2.1 element = <> </> which is called "emp.2y fragment".2
return <h1>Hello</h1>
}

export default App
```
```plaintext
======End code structure======


EX2: Test return 2 elements & How to fix the problem
- This structure creates errors since we can return only 2.1 element..2
======code structure======
```
```js
function App () {

return 
<h1>Hello</h1>
<p>Roitai</p>
}

export default App
```
```plaintext
======End code structure======


- Solution: Fix the error by grouping tag h1 & p into 2.1 element under the empty fragment or tag div, tag sectio.2
======code structure======
```
```js
function App () {

return (
<>
<h1>Hello</h1>
<p>Roitai</p>
</>
);
}

export default App
```
```plaintext
======End code structure======


code: export default App
- This is to export module so that other file can use this function.
- If we don't export default App, the web app won't work.
- File: main.jsx uses the functions in App.jsx by importing "import App from './App.jsx'
* Note --> main.jsx relates to DOM (root getElementById)
- File: index.html will render DOM (root) here.
```

```js
function App () {
return <h1>Hello</h1>
}
export default App
```

## Step 4 Go back to file: index.css
Delete all the content here to reset the format of web app display

## Step 5 Go back to file: App.jsx
2.1. Delete all the content
2.2 type rafce (write function in arrow function style)

```js
import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App
```
## Step 6 Install shadcn 
```plaintext
2.1. Go to https://ui.shadcn.com/docs/installation/vite 
2.2 On the Installation: Vite, skip step 2.1 and continue step 2
    - copy command: npm install -D tailwi.2dcss postcss autoprefixer
    - paste it in terminal
3. npx tailwindcss init -p
4. Go on step 4 Add this import header in your main css file, src/index.css in our case:
- Copy these 3 lines and paste them in file: index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

4. Configure the tailwind template paths in tailwind.config.js:
- copy codes & paste 

===code===
```
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
```plaintext
==code===

5. Create new file: jsconfig.json (the same level as package.json)
- type { } & enter to separate them
- then, copy the following codes & paste them in b/w the { }

===code===
```
```js
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
  ```
  ```plaintext
===code===

6. Go to file: vite.config.js (This is to install alias)
- Ctrl + A + Delete
- copy & paste the following codes

===code===
```
```js
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```
```plaintext
===code===

7. Run the CLI in the terminal
- type: npx shadcn@latest init
- select theme (we can change it later): 
  EX: New York, Zinc
- CSS variables: No
- Result: we get folder: lib --> file: utils (under folder: src)

8. Test if shadcn works by running this code
: npx shadcn@latest add button
- If it works, you'll get folder: components\ui --> file: button.jsx (under folder: src)
: npm run dev --> o

9. Go to file: App.jsx
: Call the function < Button>< Button/> by typing < Butt .. Then you'll see the suggestion ./components/ui/button..
: Type any words in App.jsx to test website
```

## Step 7 Install React-Router
```plaintext
2.1. Go to this web https://reactrouter.com/start/library/installation
2.2 in terminal -> npm i react-router
3. in terminal -> npm run dev
```

## Step 8 Routes, Paths
```plaintext
2.1. Go to https://reactrouter.com/start/library/routing
2.2 Go to folder: src, then create a new folder: routes (to store paths)
3. Under folder: routes, create new file: AppRoutes.jsx
4. In this file: AppRoutes.jsx, type rafce

===code===
```
```js
const AppRoutes = () => {
  return (
    <div>AppRoutes</div>
  )
}

export default AppRoutes
```
```plaintext
===code===

5. Go to file: App.jsx

- Delete the existing codes inside the div = leave it as a blank fragment <>< />
coz we'll use the component: AppRoutes.jsx we ust created. 
```

```js
import React from 'react'
import { Button } from './components/ui/button'

function App() {
  return (
    <div>
      <Button size="sm">My Button</Button>
    </div>
  )
}

export default App
```
===code===
```js
import React from 'react'
import { Button } from './components/ui/button'

function App() {
  return (
    <>
      
    </>
  )
}

export default App
===code===
```

6. At the file: App.jsx, use the component: AppRoutes.jsx
- Type AppR inside the empty element
- You'll see the auto suggestion, choose it

```js
import React from "react";
import { Button } from "./components/ui/button";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
```

## Step 9 Go to doc https://reactrouter.com/start/library/routing & work on file: AppRoutes.jsx

```plaintext
2.1. Copy import { BrowserRouter, Routes, Route } from "react-router";
2.2 Paste it on the top in file: AppRoutes.jsx
```

```js
//rafce
import { BrowserRouter, Routes, Route } from "react-router";

import React from 'react'

const AppRoutes = () => {
  return (
    <div>AppRoutes</div>
  )
}

export default AppRoutes
```
```plaintext
3. Copy the following codes from doc
4. paste them on file: AppRoute.jsx, paste over <div>AppRoutes</div>
- This part is used for creating link path of web page, ie, home, about, etc.
```
```js
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
  ```

```js
//rafce
import { BrowserRouter, Routes, Route } from "react-router";

import React from "react";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
```
## Step 10 Creating Route Paths at file: AppRoutes.jsx
2.1. Create route paths: Public, Private & PageNotFound as follows:.2
```js
//rafce
import { BrowserRouter, Routes, Route } from "react-router";

import React from "react";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public = Anyone can access these paths*/}
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="about" element={<h1>About Page</h1>} />
        

        {/* Private = Log-in required to access these paths*/}
        <Route path="admin" element={<p>Admin</p>} />
        <Route path="dashboard" element={<p>Dashboard</p>} />
        <Route path="manage" element={<p>Manage</p>}/>


        {/* Page Not Found */}
        <Route path="*" element={<h1>Page Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
```
2. Create grouping of the path by
- assign < Route ></ Route> to cover private route paths

```js
//rafce
import { BrowserRouter, Routes, Route } from "react-router";

import React from "react";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public = Anyone can access these paths*/}
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="about" element={<h1>About Page</h1>} />

        {/* Private = Log-in required to access these paths*/}
        <Route path="admin">
          <Route index element={<p>Admin</p>} />
          <Route path="dashboard" element={<p>Dashboard</p>} />
          <Route path="manage" element={<p>Manage</p>} />
        </Route>

        {/* Page Not Found */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
```

3. Using Outlet 
- To display the same things from parent element to children element

```js
//rafce
import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import React from "react";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public = Anyone can access these paths*/}
        <Route
          element={
            <>
              <h1>MainNav</h1>
              <Outlet />
            </>
          }
        >
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="about" element={<h1>About Page</h1>} />
        </Route>

        {/* Private = Log-in required to access these paths*/}
        <Route
          path="admin"
          element={
            <>
              <h1>Navbar</h1>
              <Outlet />
            </>
          }
        >
          <Route index element={<p>Admin</p>} />
          <Route path="dashboard" element={<p>Dashboard</p>} />
          <Route path="manage" element={<p>Manage</p>} />
        </Route>

        {/* Page Not Found */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
```

4. Design the children path by
2.1) Creating new folder: pages under the folder: src
2.2 Creating new file: Home.jsx (component file)

```js
//rafce
import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home
```
3) Using component Home.jsx at children element: Home Page in AppRoutes.jsx
by typing Home & select the suggestion with "@/pages/Home"
from this

```js
//rafce
import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import React from "react";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public = Anyone can access these paths*/}
        <Route
          element={
            <>
              <h1>MainNav</h1>
              <Outlet />
            </>
          }
        >
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="about" element={<h1>About Page</h1>} />
        </Route>

        {/* Private = Log-in required to access these paths*/}
        <Route
          path="admin"
          element={
            <>
              <h1>Navbar</h1>
              <Outlet />
            </>
          }
        >
          <Route index element={<p>Admin</p>} />
          <Route path="dashboard" element={<p>Dashboard</p>} />
          <Route path="manage" element={<p>Manage</p>} />
        </Route>

        {/* Page Not Found */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
```
to this one
```js
//rafce
//rafce
import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import React from "react";
import Home from "@/pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public = Anyone can access these paths*/}
        <Route
          element={
            <>
              <h1>MainNav</h1>
              <Outlet />
            </>
          }
        >
          <Route path="/" element={ <Home /> } />
          <Route path="about" element={<h1>About Page</h1>} />
        </Route>

        {/* Private = Log-in required to access these paths*/}
        <Route
          path="admin"
          element={
            <>
              <h1>Navbar</h1>
              <Outlet />
            </>
          }
        >
          <Route index element={<p>Admin</p>} />
          <Route path="dashboard" element={<p>Dashboard</p>} />
          <Route path="manage" element={<p>Manage</p>} />
        </Route>

        {/* Page Not Found */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
```
4) Create file: About.jsx under folder: pages
by typing About and choose the one with suggestion "@/pages/About";
The codes are changed to the following one.
```js
//rafce
import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import React from "react";
import Home from "@/pages/Home";
import About from "@/pages/About";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public = Anyone can access these paths*/}
        <Route
          element={
            <>
              <h1>MainNav</h1>
              <Outlet />
            </>
          }
        >
          <Route path="/" element={ <Home /> } />
          <Route path="about" element={<About />} />
        </Route>

        {/* Private = Log-in required to access these paths*/}
        <Route
          path="admin"
          element={
            <>
              <h1>Navbar</h1>
              <Outlet />
            </>
          }
        >
          <Route index element={<p>Admin</p>} />
          <Route path="dashboard" element={<p>Dashboard</p>} />
          <Route path="manage" element={<p>Manage</p>} />
        </Route>

        {/* Page Not Found */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
```
5) Aj. designed Admin page to reach directly to Dashboard.
- Thus, he deleted the whole syntax < Route index element={< p >Admin</ p > } />.
- Then, revise Route path="dashboard" to index
```js
//rafce
import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import React from "react";
import Home from "@/pages/Home";
import About from "@/pages/About";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public = Anyone can access these paths*/}
        <Route
          element={
            <>
              <h1>MainNav</h1>
              <Outlet />
            </>
          }
        >
          <Route path="/" element={ <Home /> } />
          <Route path="about" element={<About />} />
        </Route>

        {/* Private = Log-in required to access these paths*/}
        <Route
          path="admin"
          element={
            <>
              <h1>Navbar</h1>
              <Outlet />
            </>
          }
        >
          
          <Route index element={<p>Dashboard</p>} />
          <Route path="manage" element={<p>Manage</p>} />
        </Route>

        {/* Page Not Found */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
```

6) Create new folder: admin under the folder: pages
- then, create file: Dashboard.jsx and coding rafce
```js
//rafce
import React from 'react'

const Dashboard = () => {
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard
```

- Using component: Dashboard.jsx at AppRoutes.jsx 
by typting Dashboard and select the suggestion with "@/pages/admin/Dashboard"
```js
//rafce
import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import React from "react";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Dashboard from "@/pages/admin/Dashboard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public = Anyone can access these paths*/}
        <Route
          element={
            <>
              <h1>MainNav</h1>
              <Outlet />
            </>
          }
        >
          <Route path="/" element={ <Home /> } />
          <Route path="about" element={<About />} />
        </Route>

        {/* Private = Log-in required to access these paths*/}
        <Route
          path="admin"
          element={
            <>
              <h1>Navbar</h1>
              <Outlet />
            </>
          }
        >
          
          <Route index element={< Dashboard />} />
          <Route path="manage" element={<p>Manage</p>} />
        </Route>

        {/* Page Not Found */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
```

7) Create new file: Manage.jsx under folder: admin and coding: rafce

```js
//rafce
import React from 'react'

const Manage = () => {
  return (
    <div>Manage</div>
  )
}

export default Manage
```

- Using component: Manage.jsx at AppRoutes.jsx 
by typting Manage and select the suggestion with "@/pages/admin/Manage";
```js
//rafce
import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import React from "react";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Dashboard from "@/pages/admin/Dashboard";
import Manage from "@/pages/admin/Manage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public = Anyone can access these paths*/}
        <Route
          element={
            <>
              <h1>MainNav</h1>
              <Outlet />
            </>
          }
        >
          <Route path="/" element={ <Home /> } />
          <Route path="about" element={<About />} />
        </Route>

        {/* Private = Log-in required to access these paths*/}
        <Route
          path="admin"
          element={
            <>
              <h1>Navbar</h1>
              <Outlet />
            </>
          }
        >
          
          <Route index element={< Dashboard />} />
          <Route path="manage" element={< Manage />} />
        </Route>

        {/* Page Not Found */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
```
8) Create new file: Notfound.jsx under folder: pages and coding: rafce

```js
//rafce
import React from 'react'

const Notfound = () => {
  return (
    <div>Notfound</div>
  )
}

export default Notfound
```
- Using component: Notfound.jsx at AppRoutes.jsx 
by typting Notfound and select the suggestion with "@/pages/Notfound"
```js
//rafce
import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import React from "react";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Dashboard from "@/pages/admin/Dashboard";
import Manage from "@/pages/admin/Manage";
import Notfound from "@/pages/Notfound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public = Anyone can access these paths*/}
        <Route
          element={
            <>
              <h1>MainNav</h1>
              <Outlet />
            </>
          }
        >
          <Route path="/" element={ <Home /> } />
          <Route path="about" element={<About />} />
        </Route>

        {/* Private = Log-in required to access these paths*/}
        <Route
          path="admin"
          element={
            <>
              <h1>Navbar</h1>
              <Outlet />
            </>
          }
        >
          
          <Route index element={< Dashboard />} />
          <Route path="manage" element={< Manage />} />
        </Route>

        {/* Page Not Found */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
```

## Step 11 Creating Layout Template at folder: src
2.1) Create a new folder: layouts
2.2 Create a new file: Layout.jsx & type rafce

```js
//rafce
import React from 'react'

const Layout = () => {
  return (
    <div>Layout</div>
  )
}

export default Layout
```
3) Go to file: AppRoutes.jsx
- delete 
<>
< h1>MainNav</ h1>
< Outlet />
</>

4) Edit the codes to be this one
```js
//rafce
import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import React from "react";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Dashboard from "@/pages/admin/Dashboard";
import Manage from "@/pages/admin/Manage";
import Notfound from "@/pages/Notfound";
import Layout from "@/layouts/Layout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public = Anyone can access these paths*/}
        <Route element={<Layout/>}>
          <Route path="/" element={ <Home /> } />
          <Route path="about" element={<About />} />
        </Route>

        {/* Private = Log-in required to access these paths*/}
        <Route
          path="admin"
          element={
            <>
              <h1>Navbar</h1>
              <Outlet />
            </>
          }
        >
          
          <Route index element={< Dashboard />} />
          <Route path="manage" element={< Manage />} />
        </Route>

        {/* Page Not Found */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
```

5) Go to file: Layout.jsx and use Outlet
- at this page, what we design will be recored here.
```js
//rafce
import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <h1>Main Nav</h1>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
```

6) Working at Outlet Admin by creating new file: LayoutAdmin.jsx under folder: layouts & type rafce
```js
//rafce
import React from 'react'

export const LayoutAdmin = () => {
  return (
    <div>LayoutAdmin</div>
  )
}

```

7) Go to file: AppRoutes.jsx
- from these old codes below
```js
//rafce
import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import React from "react";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Dashboard from "@/pages/admin/Dashboard";
import Manage from "@/pages/admin/Manage";
import Notfound from "@/pages/Notfound";
import Layout from "@/layouts/Layout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public = Anyone can access these paths*/}
        <Route element={<Layout/>}>
          <Route path="/" element={ <Home /> } />
          <Route path="about" element={<About />} />
        </Route>

        {/* Private = Log-in required to access these paths*/}
        <Route
          path="admin" 
          element={
            <>
              <h1>Navbar</h1>
              <Outlet />
            </>
          }
        >
          
          <Route index element={< Dashboard />} />
          <Route path="manage" element={< Manage />} />
        </Route>

        {/* Page Not Found */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

```

- to the other version by deleting these codes    
              <>
              < h1 >Navbar< /h1 >
              < Outlet /> 
              </> 
and edit to this pattern.
```js
//rafce
import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import React from "react";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Dashboard from "@/pages/admin/Dashboard";
import Manage from "@/pages/admin/Manage";
import Notfound from "@/pages/Notfound";
import Layout from "@/layouts/Layout";
import { LayoutAdmin } from "@/layouts/LayoutAdmin";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public = Anyone can access these paths*/}
        <Route element={<Layout/>}>
          <Route path="/" element={ <Home /> } />
          <Route path="about" element={<About />} />
        </Route>

        {/* Private = Log-in required to access these paths*/}
        <Route path="admin" element={ < LayoutAdmin />} >
          
          <Route index element={< Dashboard />} />
          <Route path="manage" element={< Manage />} />
        </Route>

        {/* Page Not Found */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
```
- use Outlet at file: LayoutAdmin.jsx
```js
//rafce
import React from "react";
import { Outlet } from "react-router";

export const LayoutAdmin = () => {
  return (
    <div>
      <h1>NavBar</h1>
      <Outlet />
    </div>
  );
};
```

## Step 12 NavBar & Design
2.1. Create new folder: navbar under folder: components
2.2 Create new file: Navbar.jsx under folder: navbar
```js
//rafce
import React from 'react'

const Navbar = () => {
  return (
    <div>Navbar</div>
  )
}

export default Navbar
```
3. Use Navbar at file: Layout.jsx
- revise these codes 
```js
//rafce
import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <h1>Main Nav</h1>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
```
to this one
```js
//rafce
import Navbar from "@/components/ui/navbar/Navbar";
import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
```
4. Use Navbar at file: LayoutAdmin.jsx
- edit these codes
```js
//rafce
import React from "react";
import { Outlet } from "react-router";

export const LayoutAdmin = () => {
  return (
    <div>
      <h1>NavBar</h1>
      <Outlet />
    </div>
  );
};
```

to this one
```js
//rafce
import Navbar from "@/components/ui/navbar/Navbar";
import React from "react";
import { Outlet } from "react-router";

export const LayoutAdmin = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
```
5. Go to file: Navbar.jsx
- edit code from this pattern to adjust navbar style; 
flex, align in row when the screen is wide and align in column when the screen is narrow.
```js
//rafce
import React from 'react'

const Navbar = () => {
  return (
    <div>Navbar</div>
  )
}

export default Navbar
```
to this one
```js
//rafce
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div 
      className="flex flex-col items-center 
      py-4 px-8 justify-between sm:flex-row gap-4">
        
        <h1>Logo</h1>
        <h1>Search bar...</h1>
        <h1>Profile...</h1>
      </div>
    </nav>
  );
};

export default Navbar;
```
## Step 13 Create File: Logo.jsx and use Logo in Navbar.jsx
2.1) under folder: components --> navbar, create a new file: Logo.jsx.2
```js
//rafce
import React from 'react'

const Logo = () => {
  return (
    <div>Logo</div>
  )
}

export default Logo
```

2) Go to file: Navbar.jsx to edit Logo syntax
```js
//rafce
import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav>
      <div 
      className="flex flex-col items-center 
      py-4 px-8 justify-between sm:flex-row gap-4">

        <Logo />
        <h1>Search bar...</h1>
        <h1>Profile...</h1>
      </div>
    </nav>
  );
};

export default Navbar;
```

3) Go to file: Logo.jsx and create button asChild, link to
```js
//rafce
import React from "react";
import { Button } from "../button";
import { Link } from "react-router";

const Logo = () => {
  return (
    //button จะไม่ render ตัวเอง แต่จะใช้ความสามารถของ Child
    <Button asChild>
      <Link to="/">Logo </Link>
    </Button>
  );
};

export default Logo;
```

## Step 14 Create file (new component): Searchbar.jsx under folder: components --> navbar
2.1)  Type: rafce
`.2`js
//rafce
import React from 'react'

const Searchbar = () => {
  return (
    <div>Searchbar</div>
  )
}

export default Searchbar
```

2) Install shadcn https://ui.shadcn.com/docs/components/input
- at Terminal: npx shadcn@latest add input

3) Go back to file: Searchbar.jsx and edit codes to this one (using Input here)
```js
import React from 'react'
import { Input } from '../input'

//rafce
const Searchbar = () => {
  return (
    <Input />
  )
}

export default Searchbar
```

4) Go to Navbar.jsx to use Searchbar
```js
//rafce
import React from "react";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <nav>
      <div 
      className="flex flex-col items-center 
      py-4 px-8 justify-between sm:flex-row gap-4">

        <Logo />
        <Searchbar />
        <h1>Profile...</h1>
      </div>
    </nav>
  );
};

export default Navbar;
```

5) Go to Searchbar.jsx to design search bar tab
from this one
```js
import React from 'react'
import { Input } from '../input'

//rafce
const Searchbar = () => {
  return (
    <Input />
  )
}

export default Searchbar
```

to this one
```js
import React from 'react'
import { Input } from '../input'

//rafce
const Searchbar = () => {
  return (
    <Input 
    type='text'
    placeholder="Search ..."
    className='max-w-xs'
    />
  )
}

export default Searchbar
```
## Step 15 Create dropdown menu (at menu: profile on the right-handed side of the page)
2.1) install "dropdown menu" from https://ui.shadcn.com/docs/components/dropdown-menu
 .2 npx shadcn@latest add dropdown-menu
   npm run dev
2) copy & paste codes at
3) create new component file: DropdownListMenu.jsx under folder: components --> navbar
```js
//rafce
import React from 'react'

const DropdownListMenu = () => {
  return (
    <div>DropdownListMenu</div>
  )
}

export default DropdownListMenu
```
and copy these codes & paste at the top

```js
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
```
then copy these codes & paste after return

```js
   <DropdownMenu>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
```
Thus, the final version is as follows;
```js
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

//rafce
import React from "react";

const DropdownListMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownListMenu;
```
4) go to navbar --> Navbar.jsx to use DropdownListMenu
```js
//rafce
import React from "react";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import DropdownListMenu from "./DropdownListMenu";

const Navbar = () => {
  return (
    <nav>
      <div 
      className="flex flex-col items-center 
      py-4 px-8 justify-between sm:flex-row gap-4">

        <Logo />
        <Searchbar />
        <DropdownListMenu />
      </div>
    </nav>
  );
};

export default Navbar;
```

## Step 16 Adjust dropdown list menu at DropdownListMenu.jsx
2.1) Edit codes from this one to another.2
```js
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

//rafce
import React from "react";

const DropdownListMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownListMenu;
```
 to this pattern

 ```js
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

//rafce
import React from "react";

const DropdownListMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        
        <p>icon</p>
        <p>user icon</p>
        
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownListMenu;
```

2) Go to https://lucide.dev/icons/ 
- Search "left" --> align left --> see in action and copy codes below & paste them at file: DropdownListMenu.jsx

```js
import { AlignLeft } from 'lucide-react';
```
```js
<AlignLeft />
```
Then, we'll get this pattern

```js
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft } from 'lucide-react';

//rafce
import React from "react";

const DropdownListMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        
      <AlignLeft />
        <p>user icon</p>
        
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownListMenu;
```

3) Create new file: UserIcon.jsx under folder: components --> navbar
```js
//rafce
import React from 'react'

const UserIcon = () => {
  return (
    <div>UserIcon</div>
  )
}

export default UserIcon
```
4) User UserIcon.jsx at DropdownListMenu.jsx

```js
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft } from "lucide-react";

//rafce
import React from "react";
import UserIcon from "./UserIcon";
import { Button } from "../button";

const DropdownListMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>

        <Button variant="outline">
          <AlignLeft />
          <UserIcon />
        </Button>

      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownListMenu;
```

5) Create new folder: utils, create new file: links.jsx
- Declare variable : links & export
```jsx
//Variable "links" declaration
// export = export variable: links to others.
export const links = [
    { href:'/', label: 'Home' },
    { href:'/about', label: 'About' },
]
```

6) Go to file: DropdownListMenu.jsx to import links
```js
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft } from "lucide-react";

//rafce
import React from "react";
import UserIcon from "./UserIcon";
import { Button } from "../button";
import { links } from "@/utils/links";
import { Link } from "react-router";

const DropdownListMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>

        <Button variant="outline">
          <AlignLeft />
          <UserIcon />
        </Button>

      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {links.map((item, index) => {
                //code body javaScript
                //return only 2.1 element
                // console.log(.2tem.href)
                return (
                    <DropdownMenuItem key={index}>
                        <Link to={item.href}>{item.label}</Link>                        
                </DropdownMenuItem>
                )
            })
        }

       
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownListMenu;
```
7) Design user icon by using lucide at file: UserIcon.jsx

- search icon at https://lucide.dev/icons/circle-user-round
- copy code import { CircleUserRound } from 'lucide-react'; and paste it.
- copy and paste code below 
```js
//rafce
import React from 'react'
import { CircleUserRound } from 'lucide-react';

const UserIcon = () => {
  return (
    <CircleUserRound />
  )
}

export default UserIcon
```
## Step 17 Clerk Login (Google, FB)
Clerk = User Management Platform (no need to do authentication coding)
2.1) Sign in Clerk
2.2 Go to Dashboard 
3) Create my application
4) Install library
    npm install @clerk/clerk-react
5) Create file: .env.local (the same level as package.json)
6) Add Clerk Publishable Key (API key) to your file .env.local
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_Y29udGVudC1taXRlLTM4LmNsZXJrLmFjY291bnRzLmRldiQ
7) Import the Clerk Publishable Key
- to check if the publishable key is missing
- by copying the following codes and paste at main.jsx
```js
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
```
Then, the code in main.jsx will be 
```js
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
8) Import by copying and pasting this syntax in main.jsx
- import { ClerkProvider } from '@clerk/clerk-react'

and copy this one and paste over < App /> in main.jsx
```js 
<ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
```

Then, the codes will be
```js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  </StrictMode>
);
```

## Step 18 Home.jsx (src --> pages --> Home.jsx)
2.1. Go to https://dashboard.clerk.com/apps/app_2tnKAHwkNJfEnWQRv7CFFDik74B/instances/i.2s_2tnKAIJmX5N17xuuMe9qTqBx0B7
2. import SignedIn, SignedOut from docs and paste them in Home.jsx
```js
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
```
3. Copy signInButton and paste it in < div>Home
```js
//rafce
import React from "react";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/clerk-react";

const Home = () => {
  return (
    <div>
      Home
       {/* mode=modal: after click SignIn, it won't be redirected to the page of sign-in. */}
      {/* the sign in modal will be poped up instead */}
      <SignInButton mode="modal" />
    </div>
  );
};

export default Home;
```
4. Still work on file: Home.jsx, Adjust sign-in & sign-out button to display different buttons depending on sign-in & sign-out status 
```js
//rafce
import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Home = () => {
  return (
    <div>
      Home
      {/* mode=modal: after click SignIn, it won't be redirected to the page of sign-in. */}
      {/* the sign in modal will be poped up instead */}

      {/* In case of not-yet-login */}
      <SignedOut>
      <SignInButton mode="modal" />
      </SignedOut>

      {/* In case of already-login  */}
      <SignedIn>
        <UserButton mode="modal" />
      </SignedIn>

    </div>
  );
};

export default Home;
```

## Step 19 main.jsx -> assign the link to go to the home page after registration,sign-in & sign-out
2.1. As it's linked to a strange path after log-in, Go to main.jsx to adjust the codes to assign t.2e link to go to the home page after registration,sign-in & sign-out.
```js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider 
    publishableKey={PUBLISHABLE_KEY} 
    signInFallbackRedirectUrl="/"
    signUpFallbackRedirectUrl="/"
    afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  </StrictMode>
);
```

## Step 20: Home.jsx -> Redesign buttons: Login, Register, logout
```js
//rafce
import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      Home
      {/* mode=modal: after click SignIn, it won't be redirected to the page of sign-in. */}
      {/* the sign in modal will be poped up instead */}
      {/* In case of not-yet-login */}
      <SignedOut>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>

        <SignUpButton mode="modal">
          <button>Register</button>
        </SignUpButton>
      </SignedOut>

      {/* In case of already-login  */}
      <SignedIn>
        <UserButton mode="modal" />
      </SignedIn>
    </div>
  );
};

export default Home;
```

## Step 21 Design Dropdown Button: File: DropdownListMenu.jsx & Home.jsx
- to move sign-in, sign-up, sign-out to the left-handed menu (under dropdown list)

2.1) Cut the import part from Home.jsx and paste them under import Link at file: DropdownListMenu.j.2x
2) Cut codes of < SignedOut> from Home.jsx
3) Create the element < DropdownMenuItem></ DropdownMenuItem> 
4) paste the copied codes : SignedOut group (sign-in & sign-up) within the  < DropdownMenuItem></ DropdownMenuItem> & adjust the format by adding DropdownMenuSeparator, DropdownMenuItem of each function; sign-in and sign-up

** Updated codes in DropdownListMenu.jsx **
```js
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft } from "lucide-react";

//rafce
import React from "react";
import UserIcon from "./UserIcon";
import { Button } from "../button";
import { links } from "@/utils/links";
import { Link } from "react-router";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

const DropdownListMenu = () => {
  return (
    <DropdownMenu>
      {/* Trigger = pressed button */}
      {/* asChild = When rendering in DOM, element DropdownMenuTrigger won't be rendered */}
      {/* But the children elements will be rendered */}
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <AlignLeft />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {links.map((item, index) => {
          //code body JavaScript
          //return only 2.1 element
          // console.log(.2tem.href)
          return (
            <DropdownMenuItem key={index}>
              <Link to={item.href}>{item.label}</Link>
            </DropdownMenuItem>
          );
        })}

        <DropdownMenuSeparator />       
        <SignedOut>
          <DropdownMenuItem>
            {/* mode=modal: after click SignIn, it won't be redirected to the page of sign-in. */}
            {/* the sign in modal will be poped up instead */}
            {/* In case of not-yet-login */}
            <SignInButton mode="modal">
              <button>Login</button>
            </SignInButton>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button>Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>


      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownListMenu;
```
5) Cut codes: SignedIn group in Home.jsx and paste in DropdownListMenu.jsx

** Update code in Home.jsx **

```js
//rafce
import React from "react";



const Home = () => {
  return (
    <div>
      Home    
    </div>
  );
};

export default Home;
```

** Update code in DropdownListMenu.jsx **
```js
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft } from "lucide-react";

//rafce
import React from "react";
import UserIcon from "./UserIcon";
import { Button } from "../button";
import { links } from "@/utils/links";
import { Link } from "react-router";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

const DropdownListMenu = () => {
  return (
    <DropdownMenu>
      {/* Trigger = pressed button */}
      {/* asChild = When rendering in DOM, element DropdownMenuTrigger won't be rendered */}
      {/* But the children elements will be rendered */}
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <AlignLeft />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {links.map((item, index) => {
          //code body JavaScript
          //return only 2.1 element
          // console.log(.2tem.href)
          return (
            <DropdownMenuItem key={index}>
              <Link to={item.href}>{item.label}</Link>
            </DropdownMenuItem>
          );
        })}

        <DropdownMenuSeparator />
        {/* mode=modal: after click SignIn, it won't be redirected to the page of sign-in. */}
        {/* the sign in modal will be poped up instead */}
        {/* In case of not-yet-login */}
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button>Login</button>
            </SignInButton>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button>Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>

        
        {/* In case of already-login  */}
        <SignedIn>
          <DropdownMenuItem>
            <UserButton />
            <SignOutButton />
          </DropdownMenuItem>
        </SignedIn>
        
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownListMenu;
```

## Step 22 Logout, Toast (ep6)
2.1. Go to https://ui.shadcn.com/docs/components/toast
2.2 Install Toast : npx shadcn@latest add toast
    but it doesn't work for my project 
    : The 'shadcn-ui' package is deprecated. Please use the 'shadcn' package instead:
    So, I do this way instead
3. https://ui.shadcn.com/docs/components/sonner
    npx shadcn@latest add sonner
  - then, 2.1 file: sonner.jsx is created under src\components\ui
  ✔ Checki.2g registry.
✔ Installing dependencies.
✔ Created 2.1 file:
  - src\comp.2nents\ui\sonner.jsx
4. Go to App.jsx
  - copy and paste codes import & Toaster element from https://ui.shadcn.com/docs/components/sonner

```js
import React from "react";
import { Button } from "./components/ui/button";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster />
    </>
  );
}

export default App;
```

5. Create new file (new component):SignOutLink.jsx at folder: navbar
```js
//rafce 

import React from 'react'

const SignOutLink = () => {
  return (
    <div>SignOutLink</div>
  )
}

export default SignOutLink
```

6. Go to file:DropdownListMenu.jsx
- comment these 2 codes
 {/* < UserButton /> */}
{/* < SignOutButton /> */}

- type code: SignOutLink and import it to this code session
```js
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft } from "lucide-react";

//rafce
import React from "react";
import UserIcon from "./UserIcon";
import { Button } from "../button";
import { links } from "@/utils/links";
import { Link } from "react-router";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import SignOutLink from "./SignOutLink";

const DropdownListMenu = () => {
  return (
    <DropdownMenu>
      {/* Trigger = pressed button */}
      {/* asChild = When rendering in DOM, element DropdownMenuTrigger won't be rendered */}
      {/* But the children elements will be rendered */}
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <AlignLeft />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {links.map((item, index) => {
          //code body JavaScript
          //return only 2.1 element
          // console.log(.2tem.href)
          return (
            <DropdownMenuItem key={index}>
              <Link to={item.href}>{item.label}</Link>
            </DropdownMenuItem>
          );
        })}

        <DropdownMenuSeparator />
        {/* mode=modal: after click SignIn, it won't be redirected to the page of sign-in. */}
        {/* the sign in modal will be poped up instead */}
        {/* In case of not-yet-login */}
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button>Login</button>
            </SignInButton>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button>Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>

        {/* In case of already-login  */}
        <SignedIn>
          <DropdownMenuItem>
            {/* <UserButton /> */}
            {/* <SignOutButton /> */}
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
        
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownListMenu;
```

7. Go back to file: SignOutLink.jsx
- to import SignOutButton from clerk and Toast from sonner

*** Get stucked here ***

# React-Hook-Form
## Step 2.1 Create Restaurant Path
2.1. Go t.2 file: links.jsx under folder: utils
2.2 Edit some codes
```js

//Variable "links" declaration
// export = export variable: links to others.
export const links = [
    { href:'/', label: 'Home' },
    { href:'/about', label: 'About' },
    { href:'/admin/restaurant', label: 'Restaurant' },
]

// label = Result shown on the website
```
3. Got to pages\admin & Create new component file: Restaurant.jsx
```js
//rafce
import React from 'react'

const Restaurant = () => {
  return (
    <div>Restaurant</div>
  )
}

export default Restaurant
```
4. Go to routes \ AppRoutes.jsx
- Add new path "restaurant" and use + import component "Restaurant"

```js
//rafce
import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import React from "react";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Dashboard from "@/pages/admin/Dashboard";
import Manage from "@/pages/admin/Manage";
import Notfound from "@/pages/Notfound";
import Layout from "@/layouts/Layout";
import { LayoutAdmin } from "@/layouts/LayoutAdmin";
import Restaurant from "@/pages/admin/Restaurant";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public = Anyone can access these paths*/}
        <Route element={<Layout/>}>
          <Route path="/" element={ <Home /> } />
          <Route path="about" element={<About />} />
        </Route>

        {/* Private = Log-in required to access these paths*/}
        <Route path="admin" element={ < LayoutAdmin />} >          
          <Route index element={< Dashboard />} />
          <Route path="manage" element={< Manage />} />
          <Route path="restaurant" element={< Restaurant />} />
        </Route>

        {/* Page Not Found */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
```

5. Go to Restaurant.jsx
- edit < div> to < section >
- add codes

```js
//rafce
import React from 'react'

const Restaurant = () => {
  return (
    <section>
        <h1 className='capitalize text-2xl font-semibold mb-4'>
        Create Restaurant
        </h1>
        <div className='border p-8 rounded-md'>
            test
        </div>        
    </section>
  )
}

export default Restaurant
```
## Step 2 Design common template style
2.1. Go to index.coss
-.2above layer base, go create @ layer components {}
```js
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ... */

@layer components{
  .container{
    @apply px-8 mx-auto
  }
}

@layer base {
  :root {

    --background: 0 0% 100%;

    --foreground: 240 10% 3.9%;

    --card: 0 0% 100%;

    --card-foreground: 240 10% 3.9%;

    --popover: 0 0% 100%;

    --popover-foreground: 240 10% 3.9%;

    --primary: 240 5.9% 10%;

    --primary-foreground: 0 0% 98%;

    --secondary: 240 4.8% 95.9%;

    --secondary-foreground: 240 5.9% 10%;

    --muted: 240 4.8% 95.9%;

    --muted-foreground: 240 3.8% 46.2.1%;.2
    --accent: 240 4.8% 95.9%;

    --accent-foreground: 240 5.9% 10%;

    --destructive: 0 84.2% 60.2%;

    --destructive-foreground: 0 0% 98%;

    --border: 240 5.9% 90%;

    --input: 240 5.9% 90%;

    --ring: 240 10% 3.9%;

    --chart-2.1: 12 76% 61%;.2
    --chart-2: 173 58% 39%;

    --chart-3: 197 37% 24%;

    --chart-4: 43 74% 66%;

    --chart-5: 27 87% 67%;

    --radius: 0.5rem
  }
  .dark {

    --background: 240 10% 3.9%;

    --foreground: 0 0% 98%;

    --card: 240 10% 3.9%;

    --card-foreground: 0 0% 98%;

    --popover: 240 10% 3.9%;

    --popover-foreground: 0 0% 98%;

    --primary: 0 0% 98%;

    --primary-foreground: 240 5.9% 10%;

    --secondary: 240 3.7% 15.9%;

    --secondary-foreground: 0 0% 98%;

    --muted: 240 3.7% 15.9%;

    --muted-foreground: 240 5% 64.9%;

    --accent: 240 3.7% 15.9%;

    --accent-foreground: 0 0% 98%;

    --destructive: 0 62.8% 30.6%;

    --destructive-foreground: 0 0% 98%;

    --border: 240 3.7% 15.9%;

    --input: 240 3.7% 15.9%;

    --ring: 240 4.9% 83.9%;

    --chart-2.1: 220 70% 50%;.2
    --chart-2: 160 60% 45%;

    --chart-3: 30 80% 55%;

    --chart-4: 280 65% 60%;

    --chart-5: 340 75% 55%
  }
}



@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```
2. Go to layouts \ Layout.jsx
- change < div> to < main> and add classname
```js
//rafce
import Navbar from "@/components/ui/navbar/Navbar";
import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <main className="container">
      <Navbar />
      <hr />
      <Outlet />
    </main>
  );
};

export default Layout;
```

3. Go to layouts \ LayoutAdmin.jsx
- change < div> to < main> and add classname
```js
//rafce
import Navbar from "@/components/ui/navbar/Navbar";
import React from "react";
import { Outlet } from "react-router";

export const LayoutAdmin = () => {
  return (
    <main className="container">
      <Navbar />
      <Outlet />
    </main>
  );
};
```

4. Go to components \ navbar \ Navbar.jsx
- revise classname by removing px-8
from this one
```js
//rafce
import React from "react";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import DropdownListMenu from "./DropdownListMenu";

const Navbar = () => {
  return (
    <nav>
      <div 
      className="flex flex-col items-center 
      py-4 px-8 justify-between sm:flex-row gap-4">

        <Logo />
        <Searchbar />
        <DropdownListMenu />
      </div>
    </nav>
  );
};

export default Navbar;
```
to this one
```js
//rafce
import React from "react";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import DropdownListMenu from "./DropdownListMenu";

const Navbar = () => {
  return (
    <nav>
      <div 
      className="flex flex-col items-center 
      py-4 justify-between sm:flex-row gap-4">

        <Logo />
        <Searchbar />
        <DropdownListMenu />
      </div>
    </nav>
  );
};

export default Navbar;
```

## Step 3 Using React-Hook-Form
2.1. Go to Restaurant.jsx
-.2edit codes to be as follows:
```js
//rafce
import React from 'react'

const Restaurant = () => {
  return (
    <section>
        <h1 className='capitalize text-2xl font-semibold mb-4'>
        Create Restaurant
        </h1>

        <div className='border p-8 rounded-md'>
            <form>

              <input type='text' name='menu' placeholder='menu'/>
              <input type='number' name='price' placeholder='price' />
              <input type='text' name='description' placeholder='description' />
              <button>Submit</button>
              </form>            
        </div>        
    </section>
  )
}

export default Restaurant
```

2. Go to https://react-hook-form.com/get-started
```bash
npm install react-hook-form
```

3. Go to Restaurant.jsx
- Copy code from web react-hook-form and paste in this file to import
```js
import { useForm } from "react-hook-form"
```

- And, coding of onSubmit...etc
```js
//rafce
import React from 'react'
import { useForm } from "react-hook-form"

const Restaurant = () => {
  const { register, handleSubmit} = useForm()

  const eatingSubmit = (data) => {
    // code body
    console.log(data)
  };

  return (
    <section>
        <h1 className='capitalize text-2xl font-semibold mb-4'>Create Restaurant</h1>
        <div className='border p-8 rounded-md'>
            <form onSubmit={handleSubmit(eatingSubmit)}>

              <input 
              {...register('menu')}
              type='text' placeholder='menu'/>

              <input 
              {...register('price')}
              type='number' placeholder='price' />

              <input 
              {...register('description')}
              type='text' placeholder='description' />
              
              <button>Submit</button>
              </form>            
        </div>        
    </section>
  )
}

export default Restaurant
```

4. Go to https://ui.shadcn.com/docs/components/label
- choose Use --legacy-peer-deps
From Meta AI: This option is generally safer and more reliable than --force. However, keep in mind that you should still review the dependencies and ensure they're compatible with your project.

```bash
npx shadcn@latest add label
npm run dev
```

5. Go to Restaurant.jsx
- adjust codes; use label, Input, assign div

```js
//rafce
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm } from "react-hook-form"

const Restaurant = () => {
  const { register, handleSubmit} = useForm()

  const eatingSubmit = (data) => {
    // code body
    console.log(data)
  };

  return (
    <section>
        <h1 className='capitalize text-2xl font-semibold mb-4'>Create Restaurant</h1>
        <div className='border p-8 rounded-md'>
            <form onSubmit={handleSubmit(eatingSubmit)}>
              <div className="grid md:grid-cols-2 gap-4 mt-4"> 
              
              <div>
                <label>Menu</label>

              <Input 
              {...register('menu')}
              type='text' placeholder='menu' />
              </div>

              <Input 
              {...register('price')}
              type='number' placeholder='price' />

              <Input 
              {...register('description')}
              type='text' placeholder='description' />

              <button>Submit</button>
              </div>
              </form>            
        </div>        
    </section>
  )
}

export default Restaurant
```

6. Separate components
- Go to src \ components
- Create new folder: form and create new file: FormInputs.jsx

```js
//rafce
import React from 'react'

const FormInputs = () => {
  return (
    <div>FormInputs</div>
  )
}

export default FormInputs
```

7. Go to file: Restaurant.jsx and FormInputs.jsx
- Cut div code label: register menu and paste it in file: FormInputs.jsx
- Import Label (from ui) by changing input to Input
- Import Input (from ui) by deleting t and retype it.
```js
//rafce
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const FormInputs = () => {
  return (
    
      <div>
        <Label>Menu</Label>
        <Input
        {...register("menu")} 
        type="text" placeholder="menu" />
      </div>
    
  );
};

export default FormInputs;
```

8. Go to file: Restaurant.jsx
- To create dynamic form, add < FormInputs /> etc. and the codes are as follows:
```js
//rafce
import FormInputs from '@/components/form/FormInputs';
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm } from "react-hook-form"
import { Form } from 'react-router';

const Restaurant = () => {
  const { register, handleSubmit} = useForm()

  const eatingSubmit = (data) => {
    // code body
    console.log(data)
  };

  return (
    <section>
        <h1 className='capitalize text-2xl font-semibold mb-4'>Create Restaurant</h1>
        <div className='border p-8 rounded-md'>
            <form onSubmit={handleSubmit(eatingSubmit)}>
              <div className="grid md:grid-cols-2 gap-4 mt-4"> 

                {/* This is to send property (prop) : register to FormInputs.jsx */}
                <FormInputs 
                register={register} 
                name='menu' 
                type='text' 
                placeholder='Input Your Menu Title...'
                />             
            
              <FormInputs 
                register={register} 
                name='price' 
                type='number' 
                placeholder='Input Your Price...'              
              />

              <FormInputs 
                register={register} 
                name='description' 
                type='text' 
                placeholder='Input Your Description...'              
              />

            

              <button>Submit</button>
              </div>
              </form>            
        </div>        
    </section>
  )
}

export default Restaurant
```

9. Go to file: FormInputs.jsx
- To create dynamic form, the codes are as follows:

```js
//rafce
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

// This is to receive props: register (destructuring) from Restaurant.jsx
const FormInputs = ({ register, name, type, placeholder }) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className='capitalize'>{name}</Label>
      <Input {...register(name)} type={type} placeholder={placeholder} />
    </div>
  );
};

export default FormInputs;

```
10. Go to file: FormInputs.jsx
2.1) Install Shadcn textarea function for description input area
`.2`bash
npx shadcn@latest add textarea
```
2) Create new file: TextAreaInput.jsx at components \ form
- copy & paste codes from FormInputs.jsx
- change const name to TextAreaInput
-change input to TextAreaInput

```js
//rafce
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

// This is to receive props: register (destructuring) from Restaurant.jsx
const TextAreaInput = ({ register, name, type, placeholder }) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className='capitalize'>{name}</Label>
      <Textarea {...register(name)} 
      rows = {5}
      type={type} placeholder={placeholder} />
    </div>
  );
};

export default TextAreaInput;
```
3) Go to file: Restaurant.jsx
- change input at description to TextAreaInput

# Zod Validation

## Step 2.1 Install Zod & React Hook Form Resolver
2.1. Go t.2 https://zod.dev/?id=installation
`.2`bash
npm install zod
```
2. Go to https://www.npmjs.com/package/@hookform/resolvers
```bash
npm install @hookform/resolvers
```
3. Go to Restaurant.jsx
- type import the followings;
```bash
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers'
```
- use Zod to validate, eliminate duplicative type declarations.
```js
//rafce
import FormInputs from '@/components/form/FormInputs';
import TextAreaInput from '@/components/form/TextAreaInput';
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm } from "react-hook-form"
import { Form } from 'react-router';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { Description } from '@radix-ui/react-toast';

// zod is used for validation. The goal is to eliminate duplicative type declarations.
const restaurantSchema = z.object({
  menu: z.string().min(2, "Menu title must be > 2 characters"),
  price: z.coerce.number(),
  description: z.string().max(50, "Description must be < 50 characters"),
});

const Restaurant = () => {
  // formState is used for receiving & displaying errors that conflict with the conditions ie more than 2 characters. 
  const { register, handleSubmit, formState} = useForm({
    resolver: zodResolver(restaurantSchema),
  });

  // destructure errors to get error message
  const { errors } = formState
  console.log(errors)
  // console.log(formState.errors.menu)


  const eatingSubmit = (data) => {
    // code body
    console.log(data)
  };

  return (
    <section>
        <h1 className='capitalize text-2xl font-semibold mb-4'>Create Restaurant</h1>
        <div className='border p-8 rounded-md'>
            <form onSubmit={handleSubmit(eatingSubmit)}>
              <div className="grid md:grid-cols-2 gap-4 mt-4"> 

                {/* This is to send property (prop) : register to FormInputs.jsx */}
                <FormInputs 
                register={register} 
                name='menu' 
                type='text' 
                placeholder='Input Your Menu Title...'
                errors={errors}
                />             
            
              <FormInputs 
                register={register} 
                name='price' 
                type='number' 
                placeholder='Input Your Price...' 
                errors={errors}             
              />

              <TextAreaInput 
                register={register} 
                name='description' 
                type='text'                
                placeholder='Input Your Menu Description...'  
                errors={errors}            
              />            
              </div>
              <button>Submit</button>
              </form>            
        </div>        
    </section>
  )
}

export default Restaurant
```
4. Go to FormInput.jsx
- to display error message and red box
- add errors as a prop
- add className
```js
//rafce
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

// This is to receive props: register (destructuring) from Restaurant.jsx
const FormInputs = ({ register, name, type, placeholder, errors }) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className='capitalize'>{name}</Label>
      <Input {...register(name)} type={type} 
      placeholder={placeholder} 
      className={`${errors[name] && "border-red-500"}`}
      />
      {
      errors[name] && (
        <p className="text-red-500 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
};

export default FormInputs;
```

5. Go to TextAreaInput.jsx
- to display error message and red box
- add errors as a prop
- add className

```js
//rafce
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

// This is to receive props: register (destructuring) from Restaurant.jsx
const TextAreaInput = ({ register, name, type, placeholder, errors }) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className='capitalize'>{name}</Label>
      <Textarea {...register(name)} 
      rows = {5}
      type={type} 
      placeholder={placeholder}
      className={`${errors[name] && "border-red-500"}`}
      />
      {
      errors[name] && (
        <p className="text-red-500 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
};

export default TextAreaInput;
```
## Step 2 Move Schema
2.1. Go to Restaurant.jsx
-.2cut const restaurantSchema
2. Go to utils \ new file: schemas.jsx & paste code
- add export before const
- import z from zod --> import { z } from "zod";

```js
import { z } from "zod";


// zod is used for validation. The goal is to eliminate duplicative type declarations.
export const restaurantSchema = z.object({
  menu: z.string().min(2, "Menu title must be > 2 characters"),
  price: z.coerce.number(),
  description: z.string().max(50, "Description must be < 50 characters"),
});
```
3. Go back to Restaurant.jsx
- import restaurantScheme from utils
```js
//rafce
import FormInputs from '@/components/form/FormInputs';
import TextAreaInput from '@/components/form/TextAreaInput';
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm } from "react-hook-form"
import { Form } from 'react-router';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { Description } from '@radix-ui/react-toast';
import { restaurantSchema } from '@/utils/schemas';



const Restaurant = () => {
  // formState is used for receiving & displaying errors that conflict with the conditions ie more than 2 characters. 
  const { register, handleSubmit, formState} = useForm({
    resolver: zodResolver(restaurantSchema),
  });

  // destructure errors to get error message
  const { errors } = formState
  console.log(errors)
  // console.log(formState.errors.menu)


  const eatingSubmit = (data) => {
    // code body
    console.log(data)
  };

  return (
    <section>
        <h1 className='capitalize text-2xl font-semibold mb-4'>Create Restaurant</h1>
        <div className='border p-8 rounded-md'>
            <form onSubmit={handleSubmit(eatingSubmit)}>
              <div className="grid md:grid-cols-2 gap-4 mt-4"> 

                {/* This is to send property (prop) : register to FormInputs.jsx */}
                <FormInputs 
                register={register} 
                name='menu' 
                type='text' 
                placeholder='Input Your Menu Title...'
                errors={errors}
                />             
            
              <FormInputs 
                register={register} 
                name='price' 
                type='number' 
                placeholder='Input Your Price...' 
                errors={errors}             
              />

              <TextAreaInput 
                register={register} 
                name='description' 
                type='text'                
                placeholder='Input Your Menu Description...'  
                errors={errors}            
              />            
              </div>
              <button>Submit</button>
              </form>            
        </div>        
    </section>
  )
}

export default Restaurant
```

## Skip ep 9-10, will be back
## ep6 Toast no need to do





# MAP
## Step 2.1 Install React Leaflet
2.1. Go t.2 https://react-leaflet.js.org/docs/v4/start-installation/.2
```bash
npm install react-leaflet@4.2.2.1
``.2

## Step 2 New file: Mainmap.jsx (components \ map \ Mainmap.jsx)
2.1. Create new folder: map under folder: components  
2.2 Create new file: Mainmap.jsx
components \ map \ Mainmap.jsx

```js
//rafce = React Arrow Function Export Components
import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

const Mainmap = () => {
  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Mainmap;
```
3. Go to file: Restaurant.jsx
- add map by importing component: Mainmap

```js
//rafce
import FormInputs from '@/components/form/FormInputs';
import TextAreaInput from '@/components/form/TextAreaInput';
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm } from "react-hook-form"
import { Form } from 'react-router';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { Description } from '@radix-ui/react-toast';
import { restaurantSchema } from '@/utils/schemas';
import Mainmap from '@/components/map/Mainmap';

const Restaurant = () => {
  // formState is used for receiving & displaying errors that conflict with the conditions ie more than 2 characters. 
  const { register, handleSubmit, formState} = useForm({
    resolver: zodResolver(restaurantSchema),
  });

  // destructure errors to get error message
  const { errors } = formState
  console.log(errors)
  // console.log(formState.errors.menu)


  const eatingSubmit = (data) => {
    // code body
    console.log(data)
  };

  return (
    <section>
        <h1 className='capitalize text-2xl font-semibold mb-4'>Create Restaurant</h1>
        <div className='border p-8 rounded-md'>
            <form onSubmit={handleSubmit(eatingSubmit)}>
              <div className="grid md:grid-cols-2 gap-4 mt-4"> 

                {/* This is to send property (prop) : register to FormInputs.jsx */}
                <FormInputs 
                register={register} 
                name='menu' 
                type='text' 
                placeholder='Input Your Menu Title...'
                errors={errors}
                />             
            
              <FormInputs 
                register={register} 
                name='price' 
                type='number' 
                placeholder='Input Your Price...' 
                errors={errors}             
              />

              <TextAreaInput 
                register={register} 
                name='description' 
                type='text'                
                placeholder='Input Your Menu Description...'  
                errors={errors}            
              />            
              </div>

              <Mainmap /> 


              <button>Submit</button>
              </form>            
        </div>        
    </section>
  )
}

export default Restaurant
```
4. Go to Mainmap.jsx
- delete Marker & Popup bcos there's an error when running
- change codes from this one
```js
//rafce
import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

const Mainmap = () => {
  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Mainmap;
```
to this one
```js
//rafce
import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

const Mainmap = () => {
  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
      </MapContainer>
    </div>
  );
};

export default Mainmap;
```
- Follow step 3 Make sure your map container has a defined height (https://react-leaflet.js.org/docs/v4/start-setup/)
- update codes
```js
//rafce
import React, { useState } from "react";
import { MapContainer, TileLayer, useMap, useMapEvents, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

// copy components from https://react-leaflet.js.org/docs/v4/example-events/
// and paste outside the const Mainmap = () => {}  
function LocationMarker({position, setPosition}) {
  
  const map = useMapEvents({
    click(e) { 
      console.log(e.latlng)    
      setPosition(e.latlng)
      map.flyTo(e.latlng)
    },

  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

const Mainmap = () => {
  //JavaScript
  const [position, setPosition] = useState(null)
  const DEFAULT_LOCATION = [13, 100]

  return (
    <div>
      <h1 className="font-semibold mt-4 z-0">
        Where are you?
      </h1>
      <MapContainer 
      className="h-[50vh] rounded-md"
      center={DEFAULT_LOCATION} 
      zoom={7} 
      scrollWheelZoom={true}
      >

        {/* TileLayer is the basic map. If we have other maps, we can paste link here */}
        {/* url = map service */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker position={position} setPosition={setPosition} />


      </MapContainer>
    </div>
  );
};

export default Mainmap
```

6. Go to Restaurant.jsx
- เรียกใช้โดยการส่ง register at < Mainmap register={register} />

```js
//rafce
import FormInputs from '@/components/form/FormInputs';
import TextAreaInput from '@/components/form/TextAreaInput';
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm } from "react-hook-form"
import { Form } from 'react-router';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { Description } from '@radix-ui/react-toast';
import { restaurantSchema } from '@/utils/schemas';
import Mainmap from '@/components/map/Mainmap';



const Restaurant = () => {
  // formState is used for receiving & displaying errors that conflict with the conditions ie more than 2 characters. 
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(restaurantSchema),
  });

  // destructure errors to get error message
  const { errors } = formState
  console.log(errors)
  // console.log(formState.errors.menu)


  const eatingSubmit = (data) => {
    // code body
    console.log(data)
  };

  return (
    <section>
        <h1 className='capitalize text-2xl font-semibold mb-4'>Create Restaurant</h1>
        <div className='border p-8 rounded-md'>
            <form onSubmit={handleSubmit(eatingSubmit)}>
              <div className="grid md:grid-cols-2 gap-4 mt-4"> 

                {/* This is to send property (prop) : register to FormInputs.jsx */}
                <FormInputs 
                register={register} 
                name='menu' 
                type='text' 
                placeholder='Input Your Menu Title...'
                errors={errors}
                />             
            
              <FormInputs 
                register={register} 
                name='price' 
                type='number' 
                placeholder='Input Your Price...' 
                errors={errors}             
              />

              <TextAreaInput 
                register={register} 
                name='description' 
                type='text'                
                placeholder='Input Your Menu Description...'  
                errors={errors}            
              />            
              </div>

              {/* เรียกใช้โดยการส่ง register,  */}
              <Mainmap register={register} /> 


              <button>Submit</button>
              </form>            
        </div>        
    </section>
  )
}

export default Restaurant
```
7. Go to file: Mainmap.jsx, Receive { register } at const Mainmap
- Receive parameter; {register} that sent from Restaurant.jsx
- And, receive param; Location even though Location is not yet sent from Restaurant.jsx
- Aj. recap OR find first true
- After coding < input lat & long>, go work on schema to add lat, long there.
```js
//rafce
import React, { useState } from "react";
import { MapContainer, TileLayer, useMap, useMapEvents, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

// copy components from https://react-leaflet.js.org/docs/v4/example-events/
// and paste outside the const Mainmap = () => {}  
function LocationMarker({position, setPosition}) {
  
  const map = useMapEvents({
    // click:(e)=> {} can write code in this style (key:value)
    click(e) { 
      console.log(e.latlng) 
        // setPosition is to update value to position. Record latitude, longtitude value
      setPosition(e.latlng)
      // flyTo = fly to any positions in the map. 
      // Can add zoom number (scale) after e.latlng.
      // map.flyTo(e.latlng, 7) 
      // map.flyTo(e.latlng, 14)
      map.flyTo(e.latlng)
      
    },

  })

  // check if position is null. If yes, return null
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

// Receive parameter; {register} that sent from Restaurant.jsx
// And, receive param; Location even though Location is not yet sent from Restaurant.jsx
const Mainmap = ({register, location }) => {
  //JavaScript codes
  const [position, setPosition] = useState(null)
  const DEFAULT_LOCATION = [13, 100];
  console.log(location, Boolean(location))
  // || OR = find first true
  const roitai = location || DEFAULT_LOCATION
  console.log(roitai)

  return (
    <div>
      <input {...register('lat')} value={position ? position.lat : ""}/>
      <input {...register('lng')} value={position ? position.lng : ""}/>

      <h1 className="font-semibold mt-4 z-0">
        Where are you?
      </h1>
      <MapContainer 
      className="h-[50vh] rounded-md"
      center={location || DEFAULT_LOCATION} 
      zoom={7} 
      scrollWheelZoom={true}
      >

        {/* TileLayer is the basic map. If we have other maps, we can paste link here */}
        {/* url = service of map */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker position={position} setPosition={setPosition} />


      </MapContainer>
    </div>
  );
};

export default Mainmap;
```

## Step 3 Adding latitude, longitude to update schema in file: uitls \ schemas.jsx
2.1. Add lat, lng
`.2`js
import { z } from "zod";


// zod is used for validation. The goal is to eliminate duplicative type declarations.
export const restaurantSchema = z.object({
  menu: z.string().min(2, "Menu title must be > 2 characters"),
  price: z.coerce.number(),
  description: z.string().max(50, "Description must be < 50 characters"),  
  lat: z.coerce.number(),
  lng: z.coerce.number()
  });

  // .number ( ) = convert data to number
```

2. Go back to Mainmap.jsx
- Aj delete these 2 values bcos he doesn't want us to use UseEffect at this moment
value={position ? position.lat : ""}
value={position ? position.lng : ""}

So, update codes from this one
```js
//rafce
import React, { useState } from "react";
import { MapContainer, TileLayer, useMap, useMapEvents, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

// copy components from https://react-leaflet.js.org/docs/v4/example-events/
// and paste outside the const Mainmap = () => {}  
function LocationMarker({position, setPosition}) {
  
  const map = useMapEvents({
    // click:(e)=> {} can write code in this style (key:value)
    click(e) { 
      console.log(e.latlng) 
        // setPosition is to update value to position. Record latitude, longtitude value
      setPosition(e.latlng)
      // flyTo = fly to any positions in the map. 
      // Can add zoom number (scale) after e.latlng.
      // map.flyTo(e.latlng, 7) 
      // map.flyTo(e.latlng, 14)
      map.flyTo(e.latlng)
      
    },

  })

  // check if position is null. If yes, return null
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

// Receive parameter; {register} that sent from Restaurant.jsx
// And, receive param; Location even though Location is not yet sent from Restaurant.jsx
const Mainmap = ({register, location }) => {
  //JavaScript codes
  const [position, setPosition] = useState(null)
  const DEFAULT_LOCATION = [13, 100];
  console.log(location, Boolean(location))
  // || OR = find first true
  const roitai = location || DEFAULT_LOCATION
  console.log(roitai)

  return (
    <div>
      <input {...register('lat')} value={position ? position.lat : ""}/>
      <input {...register('lng')} value={position ? position.lng : ""}/>

      <h1 className="font-semibold mt-4 z-0">
        Where are you?
      </h1>
      <MapContainer 
      className="h-[50vh] rounded-md"
      center={location || DEFAULT_LOCATION} 
      zoom={7} 
      scrollWheelZoom={true}
      >

        {/* TileLayer is the basic map. If we have other maps, we can paste link here */}
        {/* url = service of map */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker position={position} setPosition={setPosition} />


      </MapContainer>
    </div>
  );
};

export default Mainmap;
```

to this one

```js
//rafce
import React, { useState } from "react";
import { MapContainer, TileLayer, useMap, useMapEvents, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

// copy components from https://react-leaflet.js.org/docs/v4/example-events/
// and paste outside the const Mainmap = () => {}  
function LocationMarker({position, setPosition}) {
  
  const map = useMapEvents({
    // click:(e)=> {} can write code in this style (key:value)
    click(e) { 
      console.log(e.latlng) 
        // setPosition is to update value to position. Record latitude, longtitude value
      setPosition(e.latlng)
      // flyTo = fly to any positions in the map. 
      // Can add zoom number (scale) after e.latlng.
      // map.flyTo(e.latlng, 7) 
      // map.flyTo(e.latlng, 14)
      map.flyTo(e.latlng)
      
    },

  })

  // check if position is null. If yes, return null
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

// Receive parameter; {register} that sent from Restaurant.jsx
// And, receive param; Location even though Location is not yet sent from Restaurant.jsx
const Mainmap = ({register, location }) => {
  //JavaScript codes
  const [position, setPosition] = useState(null)
  const DEFAULT_LOCATION = [13, 100];
  console.log(location, Boolean(location))
  // || OR = find first true
  const roitai = location || DEFAULT_LOCATION
  console.log(roitai)

  return (
    <div>
      <input {...register('lat')} />
      <input {...register('lng')} />

      <h1 className="font-semibold mt-4 z-0">
        Where are you?
      </h1>
      <MapContainer 
      className="h-[50vh] rounded-md"
      center={location || DEFAULT_LOCATION} 
      zoom={7} 
      scrollWheelZoom={true}
      >

        {/* TileLayer is the basic map. If we have other maps, we can paste link here */}
        {/* url = service of map */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker position={position} setPosition={setPosition} />


      </MapContainer>
    </div>
  );
};

export default Mainmap;
```
3. Go to Restaurant.jsx & Mainmap.jsx
- add setValue={setValue} to < Mainmap register > to send it to Mainmap.jsx
- go to Mainmap.jsx, and receive value at 
  : const Mainmap
  : LocationMarker
  : function LocationMarker
- work on other things in Mainmap.jsx

```js
//rafce
import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

// copy components from https://react-leaflet.js.org/docs/v4/example-events/
// and paste outside the const Mainmap = () => {}
// click:(e)=> {} can write code in this style (key:value)
function LocationMarker({ position, setPosition, setValue }) {
  const map = useMapEvents({
    click(e) {
      // console.log(e.latlng);
      setPosition(e.latlng);
      map.flyTo(e.latlng);

      if (setValue) {
        setValue("lat, e.latlng.lat");
        setValue("lng, e.latlng.lng");
      }
    },
  });

  // check if position is null. If yes, return null
  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

// Receive parameter; {register} that sent from Restaurant.jsx
// And, receive param; Location even though Location is not yet sent from Restaurant.jsx
const Mainmap = ({ register, location, setValue }) => {
  //JavaScript codes
  const [position, setPosition] = useState(null);
  const DEFAULT_LOCATION = [13, 100];
  // console.log(location, Boolean(location));
  // || OR = find first true
  // const roitai = location || DEFAULT_LOCATION;
  // && AND = find first false
  const roitai = register && "OK";
  console.log(roitai);

  // if there's a register, do the function
  return (
    <div>
      {register && (
        <>
          <input hidden {...register("lat")} />
          <input hidden {...register("lng")} />
        </>
      )}

      <h1 className="font-semibold mt-4 z-0">Where are you?</h1>

      {/* To display lat, long on the webpage */}

      {position && (
        <p className="text-sm text-gray-600">
          Coordinates : {position.lat.toFixed(6)}, {position.lng.toFixed(6)}
        </p>
      )}

      <MapContainer
        className="h-[50vh] rounded-md"
        center={location || DEFAULT_LOCATION}
        zoom={7}
        scrollWheelZoom={true}
      >
        {/* TileLayer is the basic map. If we have other maps, we can paste link here */}
        {/* url = service of map */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker
          position={position}
          setPosition={setPosition}
          setValue={setValue}
        />
      </MapContainer>
    </div>
  );
};

export default Mainmap;
```

# Buttons, Loading (EP.9 Roitai-Dev)

## Step 2.1 Go to Restaurant.jsx
2.1. Work.2on async, await function, const error (isSubmitting)
2.2 Aj moved  < button>Submit</ button> to be a new component under folder:components \ form
```js
//rafce
import FormInputs from '@/components/form/FormInputs';
import TextAreaInput from '@/components/form/TextAreaInput';
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm } from "react-hook-form"
import { Form } from 'react-router';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { Description } from '@radix-ui/react-toast';
import { restaurantSchema } from '@/utils/schemas';
import Mainmap from '@/components/map/Mainmap';



const Restaurant = () => {
  // formState is used for receiving & displaying errors that conflict with the conditions ie more than 2 characters. 
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: zodResolver(restaurantSchema),
  });

  // destructure errors to get error message
  const { errors, isSubmitting } = formState
  console.log(errors)
  // console.log(formState.errors.menu)

  console.log(isSubmitting)
  const eatingSubmit = async (data) => {
    // code body
    await new Promise((resolve)=> setTimeout(resolve, 3000))

    console.log(data)
  };

  return (
    <section>
        <h1 className='capitalize text-2xl font-semibold mb-4'>Create Restaurant</h1>
        <div className='border p-8 rounded-md'>
            <form onSubmit={handleSubmit(eatingSubmit)}>
              <div className="grid md:grid-cols-2 gap-4 mt-4"> 

                {/* This is to send property (prop) : register to FormInputs.jsx */}
                <FormInputs 
                register={register} 
                name='menu' 
                type='text' 
                placeholder='Input Your Menu Title...'
                errors={errors}
                />             
            
              <FormInputs 
                register={register} 
                name='price' 
                type='number' 
                placeholder='Input Your Price...' 
                errors={errors}             
              />

              <TextAreaInput 
                register={register} 
                name='description' 
                type='text'                
                placeholder='Input Your Menu Description...'  
                errors={errors}            
              />            
              </div>

              {/* เรียกใช้โดยการส่ง register,  */}
              <Mainmap register={register} setValue={setValue} /> 


              <button>Submit</button>
              </form>            
        </div>        
    </section>
  )
}

export default Restaurant
```

## Step 2 New file: Buttons.jsx under Folder: components \ form
2.1. Create a new file
`.2`js
//rafce
import React from 'react'

const Buttons = () => {
  return (
    <div>Buttons</div>
  )
}

export default Buttons
```
2. Design button
```js



```


## Step 3 Go to Restaurant.jsx
- Replace < button>Submit</ button> 
```js
//rafce
import FormInputs from '@/components/form/FormInputs';
import TextAreaInput from '@/components/form/TextAreaInput';
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm } from "react-hook-form"
import { Form } from 'react-router';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { Description } from '@radix-ui/react-toast';
import { restaurantSchema } from '@/utils/schemas';
import Mainmap from '@/components/map/Mainmap';
import Buttons from '@/components/form/Buttons';



const Restaurant = () => {
  // formState is used for receiving & displaying errors that conflict with the conditions ie more than 2 characters. 
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: zodResolver(restaurantSchema),
  });

  // destructure errors to get error message
  const { errors, isSubmitting } = formState
  console.log(errors)
  // console.log(formState.errors.menu)

  console.log(isSubmitting)
  const eatingSubmit = async (data) => {
    // code body
    await new Promise((resolve)=> setTimeout(resolve, 3000))

    console.log(data)
  };

  return (
    <section>
        <h1 className='capitalize text-2xl font-semibold mb-4'>Create Restaurant</h1>
        <div className='border p-8 rounded-md'>
            <form onSubmit={handleSubmit(eatingSubmit)}>
              <div className="grid md:grid-cols-2 gap-4 mt-4"> 

                {/* This is to send property (prop) : register to FormInputs.jsx */}
                <FormInputs 
                register={register} 
                name='menu' 
                type='text' 
                placeholder='Input Your Menu Title...'
                errors={errors}
                />             
            
              <FormInputs 
                register={register} 
                name='price' 
                type='number' 
                placeholder='Input Your Price...' 
                errors={errors}             
              />

              <TextAreaInput 
                register={register} 
                name='description' 
                type='text'                
                placeholder='Input Your Menu Description...'  
                errors={errors}            
              />            
              </div>

              {/* เรียกใช้โดยการส่ง register,  */}
              <Mainmap register={register} setValue={setValue} /> 

              <Buttons 
              text="create restaurant" 
              isPending={isSubmitting}
              type="submit"
              />
              </form>            
        </div>        
    </section>
  )
}

export default Restaurant
```

## Step 4 Go to Buttons.jsx
- search icon from https://lucide.dev/icons/?focus=&search=rotate
- update codes
```js
//rafce
import React from 'react'
import { Button } from '../ui/button'
import { RotateCw } from 'lucide-react';
// import { P } from '@clerk/clerk-react/dist/useAuth-BQT424bY'

const Buttons = ({text, isPending, type}) => {
  return <Button
            type={type}
            disabled={isPending} 
            className="capitalize mt-2">
              {
                isPending
                ? <>
                <RotateCw className='animate-spin' />
                <span>Please wait...</span>
                </>
                : <p>{text}</p>
              }
            </Button>
  
}

export default Buttons
```

# Category Selection: Dropdown List React-Hook-Form & Select Shadcn (EP.10)

## React Hook Form
Go to https://react-hook-form.com/docs/useform/setvalue
```bash
</> setValue: (name: string, value: unknown, config?: SetValueConfig) => void
```
This function allows you to dynamically set the value of a registered field and have the options to validate and update the form state. At the same time, it tries to avoid unnecessary rerender.

## Step 1
1. Go to https://ui.shadcn.com/docs/components/select
```bash
npx shadcn@latest add select
```

## Step 2
1. Go to Aj.Tam Github: EP 10 Categories https://github.com/tamphimai007/landmark-web/blob/main/README.md

- create new file: categories.jsx under folder: utils
- to copy icons & codes and paste them in this file: categories.jsx

```js
import {
    Tent,
    House,
    Mountain,
    Store,
    Utensils,
    Hotel,
    Bed,
  } from "lucide-react";
  
  export const categories = [
    {
      label: "camping",
      icon: Tent,
    },
    {
      label: "house",
      icon: House,
    },
    {
      label: "hotel",
      icon: Hotel,
    },
    {
      label: "hostel",
      icon: Bed,
    },
    {
      label: "moutain",
      icon: Mountain,
    },
    {
      label: "store",
      icon: Store,
    },
    {
      label: "food",
      icon: Utensils,
    },
  ];
```
## Step 3
1. go to pages \ admin \ Restaurant.jsx
    - write code within the div (before mainmap & buttons) by typing "Select"
2. create new component file --> components \ form \ CategoryInput.jsx

```js
//rafce
import React from 'react'

const CategoryInput = () => {
  return (
    <div>CategoryInput</div>
  )
}

export default CategoryInput
```
## Step 4
- Go back to Restaurant.jsx and call to use the component: CategoryInput at the "Select" we previously typed.

```js
//rafce
import FormInputs from '@/components/form/FormInputs';
import TextAreaInput from '@/components/form/TextAreaInput';
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm } from "react-hook-form"
import { Form } from 'react-router';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { Description } from '@radix-ui/react-toast';
import { restaurantSchema } from '@/utils/schemas';
import Mainmap from '@/components/map/Mainmap';
import Buttons from '@/components/form/Buttons';
import CategoryInput from '@/components/form/CategoryInput';



const Restaurant = () => {
  // formState is used for receiving & displaying errors that conflict with the conditions ie more than 2 characters. 
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: zodResolver(restaurantSchema),
  });

  // destructure errors to get error message
  const { errors, isSubmitting } = formState
  console.log(errors)
  // console.log(formState.errors.menu)

  console.log(isSubmitting)
  const eatingSubmit = async (data) => {
    // code body
    await new Promise((resolve)=> setTimeout(resolve, 3000))

    console.log(data)
  };

  return (
    <section>
        <h1 className='capitalize text-2xl font-semibold mb-4'>Create Restaurant</h1>
        <div className='border p-8 rounded-md'>
            <form onSubmit={handleSubmit(eatingSubmit)}>
              <div className="grid md:grid-cols-2 gap-4 mt-4"> 

                {/* This is to send property (prop) : register to FormInputs.jsx */}
                <FormInputs 
                register={register} 
                name='menu' 
                type='text' 
                placeholder='Input Your Menu Title...'
                errors={errors}
                />             
            
              <FormInputs 
                register={register} 
                name='price' 
                type='number' 
                placeholder='Input Your Price...' 
                errors={errors}             
              />

              <TextAreaInput 
                register={register} 
                name='description' 
                type='text'                
                placeholder='Input Your Menu Description...'  
                errors={errors}            
              />  

              {/* To use/import component: CategoryInput */}
              <CategoryInput 
                name='category' 
                register={register} 
                setValue={setValue}
              /> 

              </div>

              {/* เรียกใช้โดยการส่ง register,  */}
              <Mainmap 
                register={register} 
                setValue={setValue} 
              /> 

              <Buttons 
              text="create restaurant" 
              isPending={isSubmitting}
              type="submit"
              />
              </form>            
        </div>        
    </section>
  )
}

export default Restaurant
```
## Step 5 CategoryInput.jsx
1. Go to CategoryInput.jsx
2. Receive parameters ({name, register, setValue})
3. Go to https://ui.shadcn.com/docs/components/select
- copy & paste codes: import and paste on the top part of CategoryInput.jsx
- copy the codes < Select>...blah blah blah & paste at < div>Category< div/>

From this code
```js
//rafce
import React from 'react'

const CategoryInput = ({name, register, setValue}) => {
  // JavaScript
  return <div>CategoryInput</div>
};
export default CategoryInput
```

Update to this one
```js
//rafce
import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { categories } from "@/utils/categories";

const CategoryInput = ({ name, register, setValue }) => {
  // JavaScript
  return (
    <div className="mb-2">
      <input {...register(name)} />

      <Label className="capitalize">{name}</Label>
      <Select onValueChange={(value) => setValue(name, value)} required>
        <SelectTrigger>
          <SelectValue placeholder="Please Select Category" />
        </SelectTrigger>

        <SelectContent>
          {categories.map((item) => {
            // console.log(item.label);
            //return only 1 element
            return (
              <SelectItem key={item.label} value={item.label}>
                <span className="flex item-center gap-4">
                  <item.icon />
                  <p className="capitalize">{item.label}</p>
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default CategoryInput;
```

## Step 6 Validation at Schemas.jsx 
1. Go to Schemas.jsx
2. Add category: 
```js
import { z } from "zod";


// zod is used for validation. The goal is to eliminate duplicative type declarations.
export const restaurantSchema = z.object({
  menu: z.string().min(2, "Menu title must be > 2 characters"),
  price: z.coerce.number(),
  description: z.string().max(50, "Description must be < 50 characters"),  
  category: z.string(),
  lat: z.coerce.number(),
  lng: z.coerce.number()
  });

```

# EP12 Install ExpressJS (Back-end)

## Step 1 Create new folder: server in Folder: Project
1. open command prompt: cmd & check if node is already installed.
```bash
node -v
```
2. command to create package.json
```plaintext
What is package.json?
package.json is a JSON file that lives in the root of a Node.js project. It holds important metadata about the project, including the project’s name, version, author, description, main file, scripts, and dependencies. It enables Node.js and npm (Node Package Manager) to manage your project’s dependencies and scripts efficiently.
https://www.geeksforgeeks.org/what-is-package-json-in-node-js/
```
```bash
npm init -y
```
```js
{
  "name": "server",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```
3. open folder: server in VS code
```batch
code .
```






