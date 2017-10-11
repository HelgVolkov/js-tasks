/*
 There are 100 doors in a row that are all initially closed.

 You make 100 passes by the doors.

 The first time through, visit every door and  toggle  the door  (if the door is closed,  open it;   if it is open,  close it).

 The second time, only visit every 2nd door   (door #2, #4, #6, ...),   and toggle it.

 The third time, visit every 3rd door   (door #3, #6, #9, ...), etc,   until you only visit the 100th door.


 Task
 Answer the question:   what state are the doors in after the last pass?   Which are open, which are closed?
*/

let doors = new Array(100);
doors.fill(false, 0, doors.length);

for(let j = 1; j <= doors.length; j++) {
	for(let i = 0; i < doors.length; i++) {

		if((i + 1)%j) continue;
		doors[i] = !doors[i];
	}
}

function countDoors(array, state) {
	let result = 0;

	for(let i = 0; i < array.length; i++) {
		if(array[i] == state)
			result++;
	}

	return result;
}

console.log('Открытых дверей: ', countDoors(doors, true));
console.log('Закрытых дверей: ', countDoors(doors, false));