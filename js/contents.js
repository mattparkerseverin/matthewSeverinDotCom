var h5 = 'media/type/h5.svg';
var ae = 'media/type/ae.svg';
var fla = 'media/type/flash.svg';

var bannerWidth = '300';
var bannerHeight = '250';

var videoWidth = '720';
var videoHeight = '405';

var contentArray = [];

for(var i=0; i<32; i++){
	contentArray.push('thumb'+i+'');
}

var descriptionArray = [
	{description: 'Pond 5: Five ', icon: h5 },
	{description: 'Pond 5: Space ', icon: h5 },
	{description: 'Pond 5: Surf ', icon: h5 },
	{description: 'Shutterstock: Criteo ', icon: h5 },
	{description: 'Sherwin-Williams: Cube ', icon: h5 },
	{description: 'Hawaiian Tropic: Weightless ', icon: h5 },
	{description: 'Rhinocort ', icon: h5 },
	{description: 'Rhinocort: Quiz ', icon: h5 },
	{description: 'Sherwin-Williams: Color Card ', icon: h5 },
	{description: 'Samsung: Durability ', icon: h5 },
	{description: 'Samsung: Encryption ', icon: h5 },
	{description: 'Samsung: SSD ', icon: h5 },
	{description: 'Citrix Pitch End Card ', icon: ae },
	{description: 'PwC: Earn Your Future ', icon: h5 },
	{description: 'PNC Bank: Nano ', icon: h5 },
	{description: 'Samsung: SPen ', icon: h5 },
	{description: 'Purdy: Lasts Longer ', icon: h5 },
	{description: 'Duplicolor: Spray ', icon: h5 },
	{description: 'PwC / Strategy& ', icon: h5 },
	{description: 'The Kibitz Podcast: Ep. 2 ', icon: ae },
	{description: 'The Kibitz Podcast: Ep. 3 ', icon: ae },
	{description: 'Bloomberg: Labyrinth ', icon: ae },
	{description: 'JP Morgan: Brand ', icon: h5 },
	{description: 'The Kibitz Podcast: Ep. 1 ', icon: ae },
	{description: 'PwC: Chobani ', icon: h5 },
	{description: 'Google: Chromegen ', icon: fla },
	{description: 'Symbicort: MOA Module ', icon: h5 },
	{description: 'Shutterstock: Teams ', icon: h5 },
	{description: 'PNC Bank: Achievment Sessions ', icon: ae },
	{description: 'PNC Bank: Achievment Sessions ', icon: ae },
	{description: 'PNC Bank: Achievment Sessions ', icon: ae },
	{description: 'FEMA: Go Bag ', icon: ae }
];

var iframeArray = [
    { contentPath: 'media/iframe/pond5/five/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/pond5/astro/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/pond5/surf/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/shutterstock/criteo/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/sherwin/cube/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/hawaiian/weightless/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/rhinocort/banner/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/rhinocort/quiz/index.html', contentWidth: 600, contentHeight: 250, contentWidthMin: 400, contentHeightMin: 166 },
    { contentPath: 'media/iframe/sherwin/colorcard/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/samsung/durability/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/samsung/encryption/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/samsung/ssd/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'https://player.vimeo.com/video/183869729?title=0&byline=0&portrait=0', contentWidth: videoWidth, contentHeight: videoHeight },
    { contentPath: 'media/iframe/pwc/eyf/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/pnc/nano/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/samsung/spen/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/purdy/lasts/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/duplicolor/banner/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'media/iframe/pwc/strategyand/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'https://player.vimeo.com/video/153823822?title=0&byline=0&portrait=0', contentWidth: videoWidth, contentHeight: videoHeight },
    { contentPath: 'https://player.vimeo.com/video/184060633?title=0&byline=0&portrait=0', contentWidth: videoWidth, contentHeight: videoHeight },
    { contentPath: 'https://player.vimeo.com/video/184061297?title=0&byline=0&portrait=0', contentWidth: videoWidth, contentHeight: videoHeight },
    { contentPath: 'media/iframe/jpmorgan/brand/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'https://player.vimeo.com/video/149073718?title=0&byline=0&portrait=0', contentWidth: videoWidth, contentHeight: videoHeight },
    { contentPath: 'media/iframe/pwc/chobani/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: '', contentWidth: '', contentHeight: ''},
    { contentPath: 'media/iframe/symbicort/moa/index.html', contentWidth: 430, contentHeight: 383, contentWidthMin: 400, contentHeightMin: 356 },
    { contentPath: 'media/iframe/shutterstock/teams/index.html', contentWidth: bannerWidth, contentHeight: bannerHeight },
    { contentPath: 'https://player.vimeo.com/video/112938633?title=0&byline=0&portrait=0', contentWidth: videoWidth, contentHeight: videoHeight },
    { contentPath: 'https://player.vimeo.com/video/112936342?title=0&byline=0&portrait=0', contentWidth: videoWidth, contentHeight: videoHeight },
    { contentPath: 'https://player.vimeo.com/video/112934488?title=0&byline=0&portrait=0', contentWidth: videoWidth, contentHeight: videoHeight },
    { contentPath: 'https://player.vimeo.com/video/112321184?title=0&byline=0&portrait=0', contentWidth: videoWidth, contentHeight: videoHeight },
];



var iframeDetailsArray = [

	// Pond5:Five
	'Created vector line animation of the "5" based off an exisiting After Effects file. Multiple lines are layered and trimmed at different lengths to apear like a multicolored line.',

	// Pond5:Astro
	'The only way to accomplish custom masking in HTML5, across all browsers (including IE), is by using SVG vector shapes, like in the example above.',

	// Pond5:Surf
	'Vector shape and image animation, I include retina 2x resolution images for high density displays in almost all of my banners. This is especially important for clients whose product itself is imagery.',

	//Shutterstock
	'IE does a poor job of scaling images very slowly, to get around this, I animated the image in z space, I bring the image slowly away from the user to give the appearance of scaling down.',

	//SW:Cube
	'Created this without any 3d libraries which often have large file sizes. The banner is interactive and works across all browsers.',

	//Hawaiian Tropic
	'I took lens flare art which was created with the Adobe Illustrator lens flare tool, broke it apart and removed the unsupported blendmodes to a vector SVG asset. I was able to animate the individual flare circles, seperately, giving the look of an expanding flare.',

	//Zyrtec
	'A very straight forward banner. I began using a new workflow where all the images are placed on a single spritesheet, so less assets have to be loaded per impression.',

	//Rhinocort Quiz
	'boop',

	//SW Color Card
	'This is one of my earliest HTML5 banners. I no longer build banners under-the-hood the way I did this one, but I’m happy with how the animation came out. This banner was also featured in a Greensock (the developers who created TweenMax/TweenLite) email campaigns.',

	//Samsung Durability
	'Every Samsung banner I’ve worked on has had it’s own unique challenges, I learned a lot about vector animation. This is one of the simpler ones.',

	//Samsung Encryption
	'This was one of the more challenging banners I’ve worked on, I had to append hundreds of orderly asterisks and randomly ordered and spaced binary digits, then have the rows animate at different speeds, on a 3D plane, then tween only certain characters to blue.',

	//Samsung SSD
	'This banner, like most Samsung banners had some element of shape and line animation, which is typically more difficult to do since transitioning from Flash to HTML5.',

	//Citrix
	'Created a "hand drawn" style of animation using wiggle effects and low frame rate, the smaller animations were done manually frame by frame.',

	//pwc eyf
	'The intro animation for this was difficult, I originally created it in Flash, long before the HTML5 switchover. It was easy to make in Flash because developers have a visual environment to work in. In HTML5 it’s all code, no static visuals. Friend and developer Shane Akins did the tedious work of the recreating the 1-to-1 assets, measuring each rectangle asset and placing it. He also brought in the basic animations. I refined his work, specifically the easing and timing to reflect my original animation. Side note: When the client saw the original Flash animation years ago, they decided to include it in all their motion work (video, website, etc).',

	//pnc nano
	'This was a straightfoward banner except for the tablet portrait to landscape transition, I had to use CSS to rotate the cast shadow to that it would consistently cast left and down, easier said than done.',

	//Samsung Spen
	'I used After Effects to model the "drawing on" effect of the text on the phone. I rendered those out to still images sequences which I then recombined into a 2x resolution spritesheet.',

	//Purdy Lasts
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus suscipit finibus. Maecenas ligula risus, mollis sit amet molestie quis, viverra eget mauris. Ut sollicitudin, ex vitae porttitor euismod, mauris ligula molestie nulla, eget vestibulum turpis massa in nibh. Ut hendrerit sagittis quam vitae commodo. Integer interdum commodo lacus, vitae gravida purus ullamcorper sit amet. Cras est arcu, viverra quis metus consequat, vulputate eleifend dolor.',

	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus suscipit finibus. Maecenas ligula risus, mollis sit amet molestie quis, viverra eget mauris. Ut sollicitudin, ex vitae porttitor euismod, mauris ligula molestie nulla, eget vestibulum turpis massa in nibh. Ut hendrerit sagittis quam vitae commodo. Integer interdum commodo lacus, vitae gravida purus ullamcorper sit amet. Cras est arcu, viverra quis metus consequat, vulputate eleifend dolor.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus suscipit finibus. Maecenas ligula risus, mollis sit amet molestie quis, viverra eget mauris. Ut sollicitudin, ex vitae porttitor euismod, mauris ligula molestie nulla, eget vestibulum turpis massa in nibh. Ut hendrerit sagittis quam vitae commodo. Integer interdum commodo lacus, vitae gravida purus ullamcorper sit amet. Cras est arcu, viverra quis metus consequat, vulputate eleifend dolor.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus suscipit finibus. Maecenas ligula risus, mollis sit amet molestie quis, viverra eget mauris. Ut sollicitudin, ex vitae porttitor euismod, mauris ligula molestie nulla, eget vestibulum turpis massa in nibh. Ut hendrerit sagittis quam vitae commodo. Integer interdum commodo lacus, vitae gravida purus ullamcorper sit amet. Cras est arcu, viverra quis metus consequat, vulputate eleifend dolor.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus suscipit finibus. Maecenas ligula risus, mollis sit amet molestie quis, viverra eget mauris. Ut sollicitudin, ex vitae porttitor euismod, mauris ligula molestie nulla, eget vestibulum turpis massa in nibh. Ut hendrerit sagittis quam vitae commodo. Integer interdum commodo lacus, vitae gravida purus ullamcorper sit amet. Cras est arcu, viverra quis metus consequat, vulputate eleifend dolor.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus suscipit finibus. Maecenas ligula risus, mollis sit amet molestie quis, viverra eget mauris. Ut sollicitudin, ex vitae porttitor euismod, mauris ligula molestie nulla, eget vestibulum turpis massa in nibh. Ut hendrerit sagittis quam vitae commodo. Integer interdum commodo lacus, vitae gravida purus ullamcorper sit amet. Cras est arcu, viverra quis metus consequat, vulputate eleifend dolor.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus suscipit finibus. Maecenas ligula risus, mollis sit amet molestie quis, viverra eget mauris. Ut sollicitudin, ex vitae porttitor euismod, mauris ligula molestie nulla, eget vestibulum turpis massa in nibh. Ut hendrerit sagittis quam vitae commodo. Integer interdum commodo lacus, vitae gravida purus ullamcorper sit amet. Cras est arcu, viverra quis metus consequat, vulputate eleifend dolor.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus suscipit finibus. Maecenas ligula risus, mollis sit amet molestie quis, viverra eget mauris. Ut sollicitudin, ex vitae porttitor euismod, mauris ligula molestie nulla, eget vestibulum turpis massa in nibh. Ut hendrerit sagittis quam vitae commodo. Integer interdum commodo lacus, vitae gravida purus ullamcorper sit amet. Cras est arcu, viverra quis metus consequat, vulputate eleifend dolor.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus suscipit finibus. Maecenas ligula risus, mollis sit amet molestie quis, viverra eget mauris. Ut sollicitudin, ex vitae porttitor euismod, mauris ligula molestie nulla, eget vestibulum turpis massa in nibh. Ut hendrerit sagittis quam vitae commodo. Integer interdum commodo lacus, vitae gravida purus ullamcorper sit amet. Cras est arcu, viverra quis metus consequat, vulputate eleifend dolor.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus suscipit finibus. Maecenas ligula risus, mollis sit amet molestie quis, viverra eget mauris. Ut sollicitudin, ex vitae porttitor euismod, mauris ligula molestie nulla, eget vestibulum turpis massa in nibh. Ut hendrerit sagittis quam vitae commodo. Integer interdum commodo lacus, vitae gravida purus ullamcorper sit amet. Cras est arcu, viverra quis metus consequat, vulputate eleifend dolor.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus suscipit finibus. Maecenas ligula risus, mollis sit amet molestie quis, viverra eget mauris. Ut sollicitudin, ex vitae porttitor euismod, mauris ligula molestie nulla, eget vestibulum turpis massa in nibh. Ut hendrerit sagittis quam vitae commodo. Integer interdum commodo lacus, vitae gravida purus ullamcorper sit amet. Cras est arcu, viverra quis metus consequat, vulputate eleifend dolor.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus suscipit finibus. Maecenas ligula risus, mollis sit amet molestie quis, viverra eget mauris. Ut sollicitudin, ex vitae porttitor euismod, mauris ligula molestie nulla, eget vestibulum turpis massa in nibh. Ut hendrerit sagittis quam vitae commodo. Integer interdum commodo lacus, vitae gravida purus ullamcorper sit amet. Cras est arcu, viverra quis metus consequat, vulputate eleifend dolor.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus suscipit finibus. Maecenas ligula risus, mollis sit amet molestie quis, viverra eget mauris. Ut sollicitudin, ex vitae porttitor euismod, mauris ligula molestie nulla, eget vestibulum turpis massa in nibh. Ut hendrerit sagittis quam vitae commodo. Integer interdum commodo lacus, vitae gravida purus ullamcorper sit amet. Cras est arcu, viverra quis metus consequat, vulputate eleifend dolor.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus suscipit finibus. Maecenas ligula risus, mollis sit amet molestie quis, viverra eget mauris. Ut sollicitudin, ex vitae porttitor euismod, mauris ligula molestie nulla, eget vestibulum turpis massa in nibh. Ut hendrerit sagittis quam vitae commodo. Integer interdum commodo lacus, vitae gravida purus ullamcorper sit amet. Cras est arcu, viverra quis metus consequat, vulputate eleifend dolor.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus suscipit finibus. Maecenas ligula risus, mollis sit amet molestie quis, viverra eget mauris. Ut sollicitudin, ex vitae porttitor euismod, mauris ligula molestie nulla, eget vestibulum turpis massa in nibh. Ut hendrerit sagittis quam vitae commodo. Integer interdum commodo lacus, vitae gravida purus ullamcorper sit amet. Cras est arcu, viverra quis metus consequat, vulputate eleifend dolor.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus suscipit finibus. Maecenas ligula risus, mollis sit amet molestie quis, viverra eget mauris. Ut sollicitudin, ex vitae porttitor euismod, mauris ligula molestie nulla, eget vestibulum turpis massa in nibh. Ut hendrerit sagittis quam vitae commodo. Integer interdum commodo lacus, vitae gravida purus ullamcorper sit amet. Cras est arcu, viverra quis metus consequat, vulputate eleifend dolor.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus suscipit finibus. Maecenas ligula risus, mollis sit amet molestie quis, viverra eget mauris. Ut sollicitudin, ex vitae porttitor euismod, mauris ligula molestie nulla, eget vestibulum turpis massa in nibh. Ut hendrerit sagittis quam vitae commodo. Integer interdum commodo lacus, vitae gravida purus ullamcorper sit amet. Cras est arcu, viverra quis metus consequat, vulputate eleifend dolor.'
];