# Elevate360

ITP (SS24) project by:
- [Radwan Mariam](mailto:if23b023@technikum-wien.at) - Project lead  
- [Ahmed Hagar](mailto:if23b004@technikum-wien.at)
- [Auenhammer Marco](mailto:if23b501@technikum-wien.at)
- [Taher Imad](mailto:if22b016@technikum-wien.at)
- [Müllner Nick](mailto:if23b503@technikum-wien.at)

## Development

First make sure you satisfy the prerequisites:

- Install [pnpm](https://pnpm.io/installation)
    - Setup the default Node.js runtime on your system by [running](https://pnpm.io/cli/env): `pnpm env use --global latest`
      This will set the latest version to be the default on your system. Check if everything was succesful by running `ǹode -v` - you should see a version output.
- Download the appropriate PocketBase binary from [here](https://pocketbase.io/docs/) and move it to the `./pocketbase` folder.

To get started with development you need to do the following:
1. Run `pnpm install` in the same folder as the `package.json` file. This will install all the dependencies and prepare everything needed for development. Note: You need to run `pnpm install` again if there is a dependency you are missing!
2. First start the PocketBase back end with `pocketbase serve` from your shell. This should print the an URL where you can access the resources needed. Normally this should be:
    - REST API: http://127.0.0.1:8090/api/
    - Admin UI: http://127.0.0.1:8090/_/
3. In a separate shell we will start the front end with `pnpm dev`. Again this will print an URL from which you can access the actual application:
    - http://localhost:5173/
4. Now anything you develop will be instantly reflected in your browser by being automatically reloaded.
5. Develop!

## PocketBase

PocketBase is our back end which comes in a single binary. The two folders `pb_data` and `pb_migrations` are going to be created and important because that is our actual application data.

### `pg_migrations`

PocketBase uses migrations this means that the whole database is modeled with files (located in `pg_migrations`) an therefore it can be programmed. It simply runs SQL commands on the database (using the PocketBase API) which makes it possible to check it into the Git repository. Now everybody automatically has the same data and this makes it very easy to collaborate. By default an admin account is created to manage the backend you can find out its credentials by checking the appropriate migration file (`1710628388_create_default_admin_account.js`) for it and get an idea how it works. Additionally every project member has an account see the `1710633905_default_users.js` for futher information.
See the PocketBase [documentation](https://pocketbase.io/docs/js-migrations/) for more information.

### `pb_data`

This is where the actual data is stored i.e. the database - PocketBase uses SQLite to store its data. Because of the migrations we don't have to care about this folder in any other way. It isn't tracked by Git either as we can always use the migrations to recreate the exact same database from them.
