
'use client';
import configCopy from "../../../config";
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

export function Card() {

  const downloadCardAsImage = (elementId: string) => {
    const cardElement = document.getElementById(elementId) as HTMLElement;

    if (cardElement) {
      html2canvas(cardElement, {
        scale: 2,
        backgroundColor: null, // Ensure transparent background
        useCORS: true, // Enable CORS to load external images
      }).then(canvas => {
        const ctx = canvas.getContext('2d');

        // Add background image to the canvas
        const backgroundImageUrl = "https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80";
        const backgroundImage = new Image();
        backgroundImage.width = 1080;
        backgroundImage.height = 1080;
        backgroundImage.crossOrigin = 'anonymous';
        backgroundImage.src = backgroundImageUrl;
        backgroundImage.onload = () => {
          if (ctx !== null) {
            // Access properties or methods of myObject safely

            // Draw background image
            ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

            // Apply blur effect
            ctx.filter = 'blur(8px)';
            ctx.globalAlpha = 0.6; // Adjust the opacity if needed

            // Convert canvas to Blob
            canvas.toBlob((blob: Blob | null) => {
              if (blob !== null) {
                // Save Blob as PNG file
                saveAs(blob, 'card.png');
              } else {
                // Handle case where blob is null
                console.error('Blob is null.');
              }
            }, 'image/png');


          }


        };
      });
    } else {
      console.error(`Element with ID ${elementId} not found.`);
    }


  };

  return (
    // <section>
    <div className="flex flex-col items-center w-full px-5 py-12 mx-auto md:px-4 lg:px-8 max-w-7xl">
      <div className="flex flex-col text-center w-full mb-4">
        <span className="text-xl font-medium text-primary">
          This is for card
        </span>

        <h1 className="sm:text-3xl text-3xl title-font font-extrabold">
          Instagram Post
        </h1>
      </div>

      <div className="container px-6 py-10 mx-auto">


        <div className="grid gap-8 item-center justify-center">
          <div
            id="cardBlue"
            className="flex items-end overflow-hidden bg-cover rounded-lg h-96 w-96"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80')",
              backgroundSize: 'cover',
              height:"525px",
              width:"525px",
              backgroundPosition: 'center'
            }}>
            <div className="w-full px-8 py-12 overflow-hidden rounded-b-lg backdrop-blur-sm bg-blue-500/60 dark:bg-gray-800/60">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize dark:text-white">Best website
                collections</h2>
              <p className="mt-2 text-lg tracking-wider text-white uppercase dark:text-blue-400 ">Website</p>
            </div>
          </div>
          <div className="m-4 text-center">
            <button
              onClick={() => downloadCardAsImage("cardBlue")}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 inline-block">Download</button>
          </div>
        </div>


      </div>

    </div>
    // </section>
  );
}