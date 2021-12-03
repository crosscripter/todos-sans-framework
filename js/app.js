state = { }
log = console.log
template = s => document.write(s)
$ = sel => document.querySelector(sel)
$$ = sel => [...document.querySelectorAll(sel)]
toggle = (el, cls) => el?.style?.classList?.toggle(cls)
on = (el, event, handler) => el.addEventListener(event, handler)
html = (el, val=null) => val !== null ? el.innerHTML = val : el.innerHTML