"# Job-portal-DOM-project" 
Answer -1::
 a) getElementById() is used when we want to get a single element from the html document using it's id, as one id can be used in one single element.
 b) getElementsByClassName is used when we want to get all the elements that shares a common class name. It returns a HTML collection (something like array)
 c) querySelector returns the first one element from all elements with matching css selector. And QuerySelectorALl returns all the elements with matching css selectors in a nodeList. 



 ANSWER -2::
 to create an element, we can declare a varibale that holds that element. and then append it. For example-
           const div=document.createElement('div')
           conatiner.appendChild(div)


ANSWER -3::

Event bubbling occurs when the brouser faces an event, it tracks down from the root to the target node of the dom tree, target means where the event has happened. And then it executes from bottom to top. This bottom to top approach is called event bubbling.


ANSWER -4::

event delegation is using one event listenner on the parent event and managing all childrens by it. 
it is useful because when we don't know the children number, we can still manage them dynamically. 


ANSWER -5::
preventDefault() cancels the browsers default behaviours for an event.
stopPropagation() cancles the event from propagation up or down.

