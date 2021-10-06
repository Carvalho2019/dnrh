## DNRH
This project is originally made for DNRH. To run this project locally, please make sure you have [NodeJs](https://nodejs.org/en/) installed on your machine.

1. Clone this project using [git](https://git-scm.com/) or [github-cli](https://cli.github.com/) to your local machine.

```bash
  $ gh repo clone overlineink/dnrh
```

or

```bash
  $ git clone git@github.com:overlineink/dnrh.git
```

1. Install the dependencies of this project running `npm install` or `yarn`.

1. Run the project `npm run dev` or `yarn dev`

## Routes

Note: This is a demo project that export a PDF document.

Description|Method|Endpoint|Params
--|--|--|--
Redirects to the docs page on github. | GET | / | -
Returns an Invoice before its exportation. | GET | /invoice | -
Exports a PDF of the generated invoice. | GET | /invoice/print | -