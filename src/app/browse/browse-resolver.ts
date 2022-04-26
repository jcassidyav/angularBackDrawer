import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";

@Injectable()
export class DelayResolve implements Resolve<number> {
    static i:number = 1;
    constructor(private routerExtensions: RouterExtensions) {}
    resolve(): Promise<number> {
        const route = this.routerExtensions.router.url;
        console.log("In Resolver");
  //      return Promise.resolve(DelayResolve.i++);
        return this.delay(2000).then(()=> {
            console.log("In Resolver 2");
            return DelayResolve.i++;}
        );
    }

    delay(ms: number): Promise<any> {
        return new Promise((resolve) => setTimeout(resolve, ms)); // <------ Change
    }
}
