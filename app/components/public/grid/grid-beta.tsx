import configCopy from "../../../config";

export function Grid() {

  const imageUrl = "https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="flex flex-col text-center w-full mb-20">
          <span className="text-xl font-medium text-primary">
            {configCopy.grid.header}
          </span>

          <h1 className="sm:text-3xl text-3xl title-font font-extrabold">
            {configCopy.grid.subtitle}
          </h1>
        </div>

        <div className=" grid grid-cols-2 gap-12 md:grid-cols-3 lg:space-y-0 lg:text-center">
          <div>
            <div>
              <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl lg:mx-auto">
                ❖
              </div>
              <p className="mt-4 text-lg font-medium leading-6 text-black">
                Permissions
              </p>
            </div>
            <div className="mt-4 text-base text-gray-500">
              Define complex security policies to keep your users’ data safe.
            </div>
          </div>
          <div>
            <div>
              <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl lg:mx-auto">
                ❖
              </div>
              <p className="mt-4 text-lg font-medium leading-6 text-black">
                File Storage
              </p>
            </div>
            <div className="mt-4 text-base text-gray-500">Upload and manage files.</div>
          </div>
          <div>
            <div>
              <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl lg:mx-auto">
                ❖
              </div>
              <p className="mt-4 text-lg font-medium leading-6 text-black">
                Image Transformations
              </p>
            </div>
            <div className="mt-4 text-base text-gray-500">
              Resize and optimise images on the fly.
            </div>
          </div>
          <div>
            <div>
              <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl lg:mx-auto">
                ❖
              </div>
              <p className="mt-4 text-lg font-medium leading-6 text-black">
                Authentication
              </p>
            </div>
            <div className="mt-4 text-base text-gray-500">
              User accounts and social login.
            </div>
          </div>
          <div>
            <div>
              <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl lg:mx-auto">
                ❖
              </div>
              <p className="mt-4 text-lg font-medium leading-6 text-black">
                Serverless Functions
              </p>
            </div>
            <div className="mt-4 text-base text-gray-500">
              Custom backend code with logs and error handling.
            </div>
          </div>
          <div>
            <div>
              <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl lg:mx-auto">
                ❖
              </div>
              <p className="mt-4 text-lg font-medium leading-6 text-black">Payments</p>
            </div>
            <div className="mt-4 text-base text-gray-500">
              Stripe integration for all apps.
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}