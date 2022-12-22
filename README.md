# ClientApp

## ADD SSR
Run `ng add @nguniversal/express-engine` to add SSR
Run cmd `npm run dev:ssr` to run SSR

## ADD Angular Material
Run cmd `ng add @angular/material`


## ADD Dependencies Bootstrap
Install bootstrap `npm install bootstrap`
Add bootstrap refence to styles.scss file

## ADD Dependencies Bootstrap
Install bootstrap `npm install bootstrap`
Add bootstrap reference to styles.scss file
`@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";`

## ADD Dependencies NG Bootstrap Carousal
Install ng-bootstrap `npm install --save @ng-bootstrap/ng-bootstrap`
Install localize for javaScript `npm install @angular/localize`
Add NgbModule `import { NgbModule } from '@ng-bootstrap/ng-bootstrap';`  to Shared Module
Add Localize to Project `ng add @angular/localize`

## ADD Aliases in tsconfig Compiler Options
Change baseUrl to `src`
Add `paths`

## Modify Prefix in angular
Change prefix to `tap`
Change `tap-root` in index.html


## Scaffold Static Modules
`ng g m app/core`
`ng g m app/routing`

## Scaffold Shared Modules
`ng g m app/shared`
`ng g m app/material`

## Scaffold LazyLoaded Modules
`ng g m app/features/home`
`ng g m app/features/contact`
`ng g m app/features/donate`
`ng g m app/features/prayers`

## Scaffold Lazy Component Containers
Run `ng g c app/features/home --skip-tests` from `src` path
Run `ng g c app/features/contact --skip-tests` from `src` path
Run `ng g c app/features/donate --skip-tests` from `src` path
Run `ng g c app/features/prayers --skip-tests` from `src` path

## Scaffold StandAlone Components
Run `ng g c standalone\components\BtnIconCol --standalone --skip-tests` from `shared` folder
Run `ng g c standalone\components\BtnIconRow --standalone --skip-tests` from `shared` folder
Run `ng g c standalone\components\BtnIconNav --standalone --skip-tests` from `shared` folder
Run `ng g c standalone\components\NgbCarousel --standalone --skip-tests` from `shared` folder
Run `ng g c standalone\components\PrayerTime --standalone --skip-tests` from `shared` folder

