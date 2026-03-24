# TypeScript 101

— Typescript provides type checking tooling capability to the raw javaScript 
— Its just provides a better environment for devs. to write code more efficiently 

— even though we write ts code but at the end when it runs the actual javascript file runs behind the scene 

> remember one thing browser understands 3 langs. HTML , CSS , JS
> 

TS benefits 

- typescript provides better code understanding between teams
- also helps devs. to write more scalable code

### The behind the Scene of TS

#### how TypeScript Works

Here is diagram 

[https://app.eraser.io/workspace/lURSi4WDkpBOeYeaM81T?origin=share](https://app.eraser.io/workspace/lURSi4WDkpBOeYeaM81T?origin=share)

We have below components runs  to fulfill the inner working of Typescript 

1. **lexer** : lexer is a common component in every lang. which actually creates tokens from our code based on differnt keywords , functions etc
2. **parser :** Parser is actually creates the abstract syntax tree using the syntax of the code 
3. **binder :**  binder takes the syntax tree and add parent pointers ( to move b/w diff. nodes in the tree ) , flow nodes ( if -else kind of flow) 
4. **checker :**  this is the important components which does the syntax check , datatype check and gives the developers  the warning  to reduce any mistakes 
5. **Emitter :**  this component at the end emits or actually genenrated .js file which is actually runs behind the scene whenever we run the typescript file . it also trimmed down the TS code which developer written 

### TypeScript setup in a project

```bash
npm init ( to setup the project , create the package.json) 
npm i typescript -D ( install ts , as dev dependencies ) 
npx tsc --init ( to create tsconfig.json file ) 

```