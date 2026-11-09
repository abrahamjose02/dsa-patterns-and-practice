class Node{
    constructor(url){
        this.url = url
        this.next = null
        this.prev = null
    }
}

// prev allows backward navigation.
// next allows forward navigation.
// current tracks the active page.

class BrowserHistory{
    constructor(homepage){
        this.current = new Node(homepage)
    }
    visit(url){
        let newVisit = new Node(url)
        this.current.next = newVisit
        newVisit.prev = this.current
        this.current = newVisit
    }
    back(steps){
        let count = 0
        while(count < steps && this.current.prev !== null){
            this.current = this.current.prev
            count++
        }
        return this.current.url
    }
    forward(steps){
        let count = 0
        while(count < steps && this.current.next !== null){
            this.current = this.current.next
            count++
        }
        return this.current.url
    }
}

const browser = new BrowserHistory("leetcode.com")

browser.visit("google.com");
browser.visit("facebook.com");
browser.visit("youtube.com");

console.log(browser.back(1));
browser.back(1);
browser.forward(1);

browser.visit("linkedin.com");

browser.forward(2);
browser.back(2);
browser.back(7);