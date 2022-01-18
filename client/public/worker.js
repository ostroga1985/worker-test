let canvas
let ctx

onmessage = async function (evt) {
	if (!canvas) canvas = evt.data.canvas;
	if (!ctx) ctx = canvas.getContext('2d');


	const {file, width, height} = evt.data;
	if (!file) return

	const imgMap = await createImageBitmap(file)

	canvas.width = width;
	canvas.height = height;

	ctx.drawImage(imgMap, 0, 0, width, height)
	canvas.convertToBlob({type: "image/webp"}).then(function (blob) {
		postMessage(blob)
		console.log('imgMap', imgMap)
		imgMap.close()
	});
}