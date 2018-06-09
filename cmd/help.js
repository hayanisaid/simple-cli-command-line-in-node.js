const menu={
    main:`
    Said-cli [Command] <options>
    |today| ............. Show today's weather
    |help |.............. Show help options
    [forecast]...........  Show 10-day forecast wheather
    |version|............  Show package version`,
    today:`
     today [commands] available
     said-cli today New York    
    `,
    version:`
     show package  version
     said-cli version 
    `
   }



module.exports=(args)=>{
 
    const subCmd=args._[0]==='help'? args._[1]:args._[0];
    console.log(menu[subCmd] || menu.main)

}