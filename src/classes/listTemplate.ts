import { hasFormatter, setColor } from "../utilities/utilities.js";


export class ListTemplate {
    constructor(private container: HTMLUListElement) { }

    render(item: hasFormatter, heading: string, pos: 'start' | 'end') {
        const li = document.createElement('li')

        const h4 = document.createElement('h4')
        h4.innerText = heading;
        if(heading === 'invoice'){
            h4.style.color = setColor.red
        }else{
            h4.style.color = setColor.green
        }
        li.appendChild(h4)

        const p = document.createElement('p')
        p.innerText = item.format()
        li.appendChild(p)

        if(pos === 'start'){
            this.container.prepend(li)
        }else{
            this.container.append(li)
        }
    }
}