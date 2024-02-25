import configCopy from "../../../config";

export function Features() {

  const imageUrl = "https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="flex flex-col text-center w-full mb-12">
          <span className="text-xl font-medium text-primary">
            {configCopy.features.header}
          </span>

          <h1 className="sm:text-3xl text-3xl title-font font-extrabold">
            {configCopy.features.subtitle}
          </h1>
        </div>

          <div className="max-w-2xl">
            <div>
              <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                I am a slightly longer heading
              </p>
              <p className="max-w-xl mt-4 text-lg tracking-tight text-gray-600">
                If you could kick the person in the pants responsible for most of your
                trouble, you wouldn't sit for a month
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 text-left">
            <h2 className="sr-only">intro.</h2>
            <div>
              <div className="grid grid-cols-1 text-sm gap-x-2 gap-y-14 lg:grid-cols-2 lg:gap-36">
                <article>
                  <div className="space-y-3">
                    <div className="gap-2 lg:inline-flex lg:items-center">
                      <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p className="mt-2 text-lg font-medium leading-6 text-black">
                        Developer experience
                      </p>
                    </div>
                    <p className="mt-2 text-base text-gray-500">
                      With the ability to share code, track changes and provide
                      feedback, you'll be able to complete projects faster.
                    </p>
                  </div>
                </article>
                <article>
                  <div className="space-y-3">
                    <div className="gap-2 lg:inline-flex lg:items-center">
                      <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
                        ❖
                      </div>
                      <p className="mt-2 text-lg font-medium leading-6 text-black">
                        Conect your SaaS
                      </p>
                    </div>
                    <p className="mt-2 text-base text-gray-500">
                      That's why we've made our SaaS programming product available at
                      a price that's affordable for everyone
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>


      </div>
    </section>
  );
}