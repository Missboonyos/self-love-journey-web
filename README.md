# SELF-LOVE-JOURNEY-WEB

## Step 1 Create Project File & Open File in VS Code


<< Work on window terminal >>
1. Create folder in your assigned drive/folder
2. Go to explorer taskbar --> click --> type 'cmd' to open terminal
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
1. Look at section "scripts"
- This section is about the scripts that instruct the computer to run program.
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
1. Delete all data in this file (ctrl+A+delete)
2. Write the following function;
    : App is a component
    : How to name a component: Start with Capital letter
    : Export only 1 element to run the program
      - This file "App.jsx" is the parent file.
      - The children files will operate by using the codes in this file.

EX1: Return 1 element
======code structure======
```
```js
function App () {
    // Code body
    // JavaScript
    // Function will return in jsx & return only 1 element*.
    // * 1 element = <> </> which is called "empty fragment"

return <h1>Hello</h1>
}

export default App
```
```plaintext
======End code structure======


EX2: Test return 2 elements & How to fix the problem
- This structure creates errors since we can return only 1 element.

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


- Solution: Fix the error by grouping tag h1 & p into 1 element under the empty fragment or tag div, tag section
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
1. Delete all the content
2. type rafce (write function in arrow function style)

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
1. Go to https://ui.shadcn.com/docs/installation/vite 
2. On the Installation: Vite, skip step 1 and continue step 2
    - copy command: npm install -D tailwindcss postcss autoprefixer
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
1. Go to this web https://reactrouter.com/start/library/installation
2. in terminal -> npm i react-router
3. in terminal -> npm run dev
```

## Step 8 Routes, Paths
```plaintext
1. Go to https://reactrouter.com/start/library/routing
2. Go to folder: src, then create a new folder: routes (to store paths)
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
1. Copy import { BrowserRouter, Routes, Route } from "react-router";
2. Paste it on the top in file: AppRoutes.jsx
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
1. Create route paths: Public, Private & PageNotFound as follows:

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
1) Creating new folder: pages under the folder: src
2) Creating new file: Home.jsx (component file)

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
1) Create a new folder: layouts
2) Create a new file: Layout.jsx & type rafce

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