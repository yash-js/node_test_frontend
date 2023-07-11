import React, { useEffect, useState } from "react";
import { useList } from "../../hooks/useList";
import moment from "moment";
import Loader from "../Loader";

const Table = () => {
  const { candidates, loading, sortByDate, sortByName } = useList();

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        title="Sort by Name in Ascending or Descending order"
                        className="px-4 py-3.5 text-left text-sm font-normal cursor-pointer text-blue-800 underline"
                        onClick={sortByName}
                      >
                        <span>Name</span>
                      </th>
                      <th
                        onClick={sortByDate}
                        scope="col"
                        title="Sort by Date in Ascending or Descending order"
                        className="px-4 py-3.5 text-left text-sm font-normal cursor-pointer text-blue-800 underline"
                      >
                        Date of Birth
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Country
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Resume
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {loading ? (
                      <tr>
                        <td>
                          <div className="py-6 px-2 text-center">
                            <Loader />
                          </div>
                        </td>
                      </tr>
                    ) : candidates.length > 0 ? (
                      candidates.map((candidate) => (
                        <tr key={candidate.resume}>
                          <td className="whitespace-nowrap px-4 py-4">
                            <div className="text-sm text-gray-900 ">
                              {candidate.name}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4">
                            <div className="text-sm text-gray-900 ">
                              {moment(candidate.dateOfBirth).format("LL")}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4">
                            <div className="text-sm text-gray-900 ">
                              {candidate.country}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                            <a
                              href={`${
                                import.meta.env.VITE_API_BASE_URL +
                                "/uploads/" +
                                candidate.resume
                              }`}
                              target="_blank"
                              className="text-blue-500 "
                            >
                              Download
                            </a>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td>
                          <p className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                            No Data Found!
                          </p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Table;
