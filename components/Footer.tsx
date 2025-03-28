import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="bg-blue-100 pt-7 "
        // style={{
        //   background:
        //     "linear-gradient(90deg, rgba(49,140,231,.5) 15%, rgba(254,207,103,.5) 85%)",
        // }}

      >
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-6">
                <div>
                  <a
                    href="/home"
                    className="text-xl font-bold text-gray-800  hover:text-gray-700"
                  >
                    <svg
                      width="270"
                      height="58"
                      viewBox="0 0 305 58"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-900 "
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M277.7 39.9199C277.4 40.6199 277.2 41.3199 276.9 41.8199C276.6 42.5199 276.2 43.0199 275.8 43.3199C275.6 43.4199 275.4 43.5199 275.2 43.6199C275 43.7199 274.8 43.8199 274.5 43.8199C274.2 43.9199 273.7 43.9199 273.2 43.9199C272.8 43.9199 272.4 43.9199 271.9 43.9199C272.2 43.2199 272.4 42.5199 272.7 42.0199C273 41.3199 273.4 40.8199 273.8 40.5199C274 40.4199 274.2 40.3199 274.4 40.2199C274.6 40.1199 274.8 40.0199 275.1 40.0199C275.7 39.9199 276.5 39.9199 277.7 39.9199ZM283.4 39.9199C283.1 40.6199 282.9 41.3199 282.6 41.8199C282.3 42.5199 281.9 43.0199 281.5 43.3199C281.3 43.4199 281.1 43.5199 280.9 43.6199C280.7 43.7199 280.5 43.8199 280.2 43.8199C279.8 43.9199 279.4 43.9199 278.9 43.9199C278.5 43.9199 278.1 43.9199 277.6 43.9199C277.9 43.2199 278.1 42.5199 278.4 42.0199C278.7 41.3199 279.1 40.8199 279.5 40.5199C279.7 40.4199 279.9 40.3199 280.1 40.2199C280.3 40.1199 280.5 40.0199 280.8 40.0199C281.5 39.9199 282.3 39.9199 283.4 39.9199ZM289.2 39.9199C288.9 40.6199 288.7 41.3199 288.4 41.8199C288.1 42.5199 287.7 43.0199 287.3 43.3199C287.1 43.4199 286.9 43.5199 286.7 43.6199C286.5 43.7199 286.3 43.8199 286 43.8199C285.7 43.9199 285.2 43.9199 284.7 43.9199C284.3 43.9199 283.9 43.9199 283.4 43.9199C283.7 43.2199 283.9 42.5199 284.2 42.0199C284.5 41.3199 284.9 40.8199 285.3 40.5199C285.5 40.4199 285.7 40.3199 285.9 40.2199C286.1 40.1199 286.3 40.0199 286.6 40.0199C287.2 39.9199 288 39.9199 289.2 39.9199ZM283.4 49.4199C283.1 48.7199 282.9 48.0199 282.6 47.5199C282.3 46.8199 281.9 46.3199 281.5 46.0199C281.3 45.9199 281.1 45.8199 280.9 45.7199C280.7 45.6199 280.5 45.5199 280.2 45.5199C279.8 45.4199 279.4 45.4199 278.9 45.4199C278.5 45.4199 278.1 45.4199 277.6 45.4199C277.9 46.1199 278.1 46.8199 278.4 47.3199C278.7 48.0199 279.1 48.5199 279.5 48.8199C279.7 48.9199 279.9 49.0199 280.1 49.1199C280.3 49.2199 280.5 49.3199 280.8 49.3199C281.5 49.4199 282.3 49.4199 283.4 49.4199ZM289.2 49.4199C288.9 48.7199 288.7 48.0199 288.4 47.5199C288.1 46.8199 287.7 46.3199 287.3 46.0199C287.1 45.9199 286.9 45.8199 286.7 45.7199C286.5 45.6199 286.3 45.5199 286 45.5199C285.7 45.4199 285.2 45.4199 284.7 45.4199C284.3 45.4199 283.9 45.4199 283.4 45.4199C283.7 46.1199 283.9 46.8199 284.2 47.3199C284.5 48.0199 284.9 48.5199 285.3 48.8199C285.5 48.9199 285.7 49.0199 285.9 49.1199C286.1 49.2199 286.3 49.3199 286.6 49.3199C287.2 49.4199 288 49.4199 289.2 49.4199ZM271.8 45.3199C272.1 46.0199 272.3 46.7199 272.6 47.2199C272.9 47.9199 273.3 48.4199 273.7 48.7199C273.9 48.8199 274.1 48.9199 274.3 49.0199C274.5 49.1199 274.7 49.2199 275 49.2199C275.6 49.3199 276.5 49.3199 277.6 49.3199C277.3 48.6199 277.1 47.9199 276.8 47.4199C276.5 46.7199 276.1 46.2199 275.7 45.9199C275.5 45.8199 275.3 45.7199 275.1 45.6199C274.9 45.5199 274.7 45.4199 274.4 45.4199C274.1 45.3199 273.6 45.3199 273.1 45.3199C272.7 45.4199 272.3 45.4199 271.8 45.3199ZM289.6 42.4199C290 41.7199 290.3 40.8199 290.7 39.8199H298.5C298.9 39.8199 299.2 39.5199 299.2 39.1199C299.2 38.7199 298.9 38.4199 298.5 38.4199H289.3C288.9 38.4199 288.5 38.4199 288.2 38.4199H287.5C287.4 38.4199 287.4 38.4199 287.3 38.4199C287 38.4199 286.7 38.5199 286.4 38.5199C286 38.6199 285.7 38.7199 285.4 38.8199L285.5 38.4199H284.5H283.6C282.3 38.4199 281.4 38.4199 280.6 38.5199C280.2 38.6199 279.9 38.7199 279.6 38.8199L279.7 38.4199H278.7H277.8C276.5 38.4199 275.6 38.4199 274.8 38.5199C271.8 39.0199 270.8 41.9199 269.9 43.8199H262.5C262.1 43.8199 261.8 44.1199 261.8 44.5199C261.8 44.9199 262.1 45.2199 262.5 45.2199H269.9C270.8 47.2199 271.8 50.0199 274.8 50.5199C275.6 50.6199 276.5 50.6199 277.8 50.6199H279.7L279.6 50.2199C279.9 50.3199 280.2 50.4199 280.6 50.5199C281.4 50.6199 282.3 50.6199 283.6 50.6199H285.5L285.4 50.2199C285.7 50.3199 286 50.4199 286.4 50.5199C286.7 50.6199 287 50.6199 287.3 50.6199C287.4 50.6199 287.4 50.6199 287.5 50.6199H288.2C288.5 50.6199 288.9 50.6199 289.3 50.6199H298.5C298.9 50.6199 299.2 50.3199 299.2 49.9199C299.2 49.5199 298.9 49.2199 298.5 49.2199H290.7C290.3 48.2199 290 47.4199 289.6 46.6199C289.3 46.0199 289 45.5199 288.6 45.1199H295.2C295.6 45.1199 295.9 44.8199 295.9 44.4199C295.9 44.0199 295.6 43.7199 295.2 43.7199H288.6C289 43.6199 289.3 43.1199 289.6 42.4199Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M277.7 7.61875C277.4 8.31875 277.2 9.01875 276.9 9.51875C276.6 10.2187 276.2 10.7187 275.8 11.0187C275.6 11.1187 275.4 11.2187 275.2 11.3187C275 11.4187 274.8 11.5187 274.5 11.5187C274.2 11.6187 273.7 11.6187 273.2 11.6187C272.8 11.6187 272.4 11.6187 271.9 11.6187C272.2 10.9187 272.4 10.2188 272.7 9.71875C273 9.01875 273.4 8.51875 273.8 8.21875C274 8.11875 274.2 8.01875 274.4 7.91875C274.6 7.81875 274.8 7.71875 275.1 7.71875C275.7 7.61875 276.5 7.61875 277.7 7.61875ZM283.4 7.61875C283.1 8.31875 282.9 9.01875 282.6 9.51875C282.3 10.2187 281.9 10.7187 281.5 11.0187C281.3 11.1187 281.1 11.2187 280.9 11.3187C280.7 11.4187 280.5 11.5187 280.2 11.5187C279.8 11.6187 279.4 11.6187 278.9 11.6187C278.5 11.6187 278.1 11.6187 277.6 11.6187C277.9 10.9187 278.1 10.2188 278.4 9.71875C278.7 9.01875 279.1 8.51875 279.5 8.21875C279.7 8.11875 279.9 8.01875 280.1 7.91875C280.3 7.81875 280.5 7.71875 280.8 7.71875C281.5 7.61875 282.3 7.61875 283.4 7.61875ZM289.2 7.61875C288.9 8.31875 288.7 9.01875 288.4 9.51875C288.1 10.2187 287.7 10.7187 287.3 11.0187C287.1 11.1187 286.9 11.2187 286.7 11.3187C286.5 11.4187 286.3 11.5187 286 11.5187C285.7 11.6187 285.2 11.6187 284.7 11.6187C284.3 11.6187 283.9 11.6187 283.4 11.6187C283.7 10.9187 283.9 10.2188 284.2 9.71875C284.5 9.01875 284.9 8.51875 285.3 8.21875C285.5 8.11875 285.7 8.01875 285.9 7.91875C286.1 7.81875 286.3 7.71875 286.6 7.71875C287.2 7.61875 288 7.61875 289.2 7.61875ZM283.4 17.1187C283.1 16.4187 282.9 15.7188 282.6 15.2188C282.3 14.5188 281.9 14.0188 281.5 13.7188C281.3 13.6187 281.1 13.5187 280.9 13.4187C280.7 13.3187 280.5 13.2188 280.2 13.2188C279.8 13.1187 279.4 13.1187 278.9 13.1187C278.5 13.1187 278.1 13.1187 277.6 13.1187C277.9 13.8187 278.1 14.5187 278.4 15.0187C278.7 15.7187 279.1 16.2187 279.5 16.5187C279.7 16.6187 279.9 16.7188 280.1 16.8188C280.3 16.9188 280.5 17.0187 280.8 17.0187C281.5 17.1187 282.3 17.1187 283.4 17.1187ZM289.2 17.1187C288.9 16.4187 288.7 15.7188 288.4 15.2188C288.1 14.5188 287.7 14.0188 287.3 13.7188C287.1 13.6187 286.9 13.5187 286.7 13.4187C286.5 13.3187 286.3 13.2188 286 13.2188C285.7 13.1187 285.2 13.1187 284.7 13.1187C284.3 13.1187 283.9 13.1187 283.4 13.1187C283.7 13.8187 283.9 14.5187 284.2 15.0187C284.5 15.7187 284.9 16.2187 285.3 16.5187C285.5 16.6187 285.7 16.7188 285.9 16.8188C286.1 16.9188 286.3 17.0187 286.6 17.0187C287.2 17.1187 288 17.1187 289.2 17.1187ZM271.8 13.1187C272.1 13.8187 272.3 14.5187 272.6 15.0187C272.9 15.7187 273.3 16.2187 273.7 16.5187C273.9 16.6187 274.1 16.7188 274.3 16.8188C274.5 16.9188 274.7 17.0187 275 17.0187C275.6 17.1187 276.5 17.1187 277.6 17.1187C277.3 16.4187 277.1 15.7188 276.8 15.2188C276.5 14.5188 276.1 14.0188 275.7 13.7188C275.5 13.6187 275.3 13.5187 275.1 13.4187C274.9 13.3187 274.7 13.2188 274.4 13.2188C274.1 13.1187 273.6 13.1187 273.1 13.1187C272.7 13.1187 272.3 13.1187 271.8 13.1187ZM289.6 10.2188C290 9.51875 290.3 8.61875 290.7 7.61875H298.5C298.9 7.61875 299.2 7.31875 299.2 6.91875C299.2 6.51875 298.9 6.21875 298.5 6.21875H289.3C288.9 6.21875 288.5 6.21875 288.2 6.21875H287.5C287.4 6.21875 287.4 6.21875 287.3 6.21875C287 6.21875 286.7 6.31875 286.4 6.31875C286 6.41875 285.7 6.51875 285.4 6.61875L285.5 6.21875H283.6C282.3 6.21875 281.4 6.21875 280.6 6.31875C280.2 6.41875 279.9 6.51875 279.6 6.61875L279.7 6.21875H277.8C276.5 6.21875 275.6 6.21875 274.8 6.31875C271.8 6.81875 270.8 9.61875 269.9 11.6187H262.5C262.1 11.6187 261.8 11.9187 261.8 12.3187C261.8 12.7187 262.1 13.0187 262.5 13.0187H269.9C270.8 15.0187 271.8 17.8188 274.8 18.3188C275.6 18.4188 276.5 18.4187 277.8 18.4187H279.7L279.6 18.0187C279.9 18.1187 280.2 18.2188 280.6 18.3188C281.4 18.4188 282.3 18.4187 283.6 18.4187H285.5L285.4 18.0187C285.7 18.1187 286 18.2188 286.4 18.3188C286.7 18.4188 287 18.4187 287.3 18.4187C287.4 18.4187 287.4 18.4187 287.5 18.4187H288.2C288.5 18.4187 288.9 18.4187 289.3 18.4187H298.5C298.9 18.4187 299.2 18.1188 299.2 17.7188C299.2 17.3187 298.9 17.0187 298.5 17.0187H290.7C290.3 16.0187 290 15.1187 289.6 14.4187C289.3 13.8187 289 13.3187 288.6 12.9187H295.2C295.6 12.9187 295.9 12.6188 295.9 12.2188C295.9 11.8187 295.6 11.5187 295.2 11.5187H288.6C289 11.2187 289.3 10.8188 289.6 10.2188Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M284.1 31.1203C283.8 30.6203 283.6 29.9203 283.3 29.2203C284.4 29.2203 285.3 29.2203 285.9 29.3203C286.2 29.4203 286.4 29.4203 286.6 29.5203C286.8 29.6203 287 29.7203 287.2 29.8203C287.6 30.1203 288 30.6203 288.3 31.3203C288.6 31.8203 288.8 32.4203 289.1 33.2203C288 33.2203 287.1 33.2203 286.5 33.1203C286.2 33.0203 286 33.0203 285.8 32.9203C285.6 32.8203 285.3 32.7203 285.2 32.6203C284.9 32.2203 284.5 31.8203 284.1 31.1203ZM277.6 29.2203C278.7 29.2203 279.6 29.2203 280.2 29.3203C280.5 29.4203 280.7 29.4203 280.9 29.5203C281.1 29.6203 281.4 29.7203 281.5 29.8203C281.9 30.1203 282.3 30.6203 282.6 31.3203C282.9 31.8203 283.1 32.4203 283.4 33.2203C282.3 33.2203 281.4 33.2203 280.8 33.1203C280.5 33.0203 280.3 33.0203 280.1 32.9203C279.9 32.8203 279.7 32.7203 279.5 32.6203C279.1 32.3203 278.7 31.8203 278.4 31.1203C278.1 30.6203 277.8 29.9203 277.6 29.2203ZM276.9 25.6203C276.6 26.3203 276.2 26.8203 275.8 27.1203C275.6 27.2203 275.4 27.3203 275.2 27.4203C275 27.5203 274.8 27.6203 274.5 27.6203C274.2 27.7203 273.7 27.7203 273.2 27.7203C272.8 27.7203 272.4 27.7203 271.9 27.7203C272.2 27.0203 272.4 26.3203 272.7 25.8203C273 25.1203 273.4 24.6203 273.8 24.3203C274 24.2203 274.2 24.1203 274.4 24.0203C274.6 23.9203 274.8 23.8203 275.1 23.8203C275.7 23.7203 276.6 23.7203 277.7 23.7203C277.4 24.5203 277.1 25.1203 276.9 25.6203ZM289.1 27.7203C289.4 27.0203 289.6 26.3203 289.9 25.8203C290.2 25.1203 290.6 24.6203 291 24.3203C291.2 24.2203 291.4 24.1203 291.6 24.0203C291.8 23.9203 292 23.8203 292.3 23.8203C292.9 23.7203 293.8 23.7203 294.9 23.7203C294.6 24.4203 294.3 25.1203 294.1 25.6203C293.8 26.3203 293.4 26.8203 293 27.1203C292.8 27.2203 292.6 27.3203 292.4 27.4203C292.2 27.5203 292 27.6203 291.7 27.6203C291.3 27.7203 290.9 27.7203 290.4 27.7203C290 27.7203 289.5 27.7203 289.1 27.7203ZM284.1 25.8203C284.4 25.1203 284.8 24.6203 285.2 24.3203C285.4 24.2203 285.6 24.1203 285.8 24.0203C286 23.9203 286.2 23.8203 286.5 23.8203C287.1 23.7203 288 23.7203 289.1 23.7203C288.8 24.4203 288.6 25.1203 288.3 25.6203C288 26.3203 287.6 26.8203 287.2 27.1203C287 27.2203 286.8 27.3203 286.6 27.4203C286.4 27.5203 286.2 27.6203 285.9 27.6203C285.6 27.7203 285.1 27.7203 284.6 27.7203C284.2 27.7203 283.8 27.7203 283.3 27.7203C283.6 27.0203 283.8 26.4203 284.1 25.8203ZM289.9 31.1203C289.6 30.6203 289.4 29.9203 289.1 29.2203C290.2 29.2203 291.1 29.2203 291.7 29.3203C292 29.4203 292.2 29.4203 292.4 29.5203C292.6 29.6203 292.9 29.7203 293 29.8203C293.4 30.1203 293.8 30.6203 294.1 31.3203C294.4 31.8203 294.6 32.4203 294.9 33.2203C293.8 33.2203 292.9 33.2203 292.3 33.1203C292 33.0203 291.8 33.0203 291.6 32.9203C291.4 32.8203 291.2 32.7203 291 32.6203C290.6 32.3203 290.2 31.8203 289.9 31.1203ZM277.6 27.7203C277.9 27.0203 278.1 26.3203 278.4 25.8203C278.7 25.1203 279.1 24.6203 279.5 24.3203C279.7 24.2203 279.9 24.1203 280.1 24.0203C280.3 23.9203 280.5 23.8203 280.8 23.8203C281.4 23.7203 282.3 23.7203 283.4 23.7203C283.1 24.4203 282.9 25.1203 282.6 25.6203C282.3 26.3203 281.9 26.8203 281.5 27.1203C281.3 27.2203 281.1 27.3203 280.9 27.4203C280.7 27.5203 280.5 27.6203 280.2 27.6203C279.8 27.7203 279.4 27.7203 278.9 27.7203C278.5 27.7203 278.1 27.7203 277.6 27.7203ZM270.3 29.2203C270.7 30.2203 271 31.0203 271.4 31.8203C271.9 32.7203 272.3 33.3203 272.9 33.8203C273.1 34.0203 273.4 34.2203 273.8 34.3203C274.1 34.4203 274.4 34.5203 274.8 34.6203C275.6 34.7203 276.5 34.7203 277.8 34.7203H279.7L279.6 34.3203C279.9 34.4203 280.2 34.5203 280.6 34.6203C281.4 34.7203 282.3 34.7203 283.6 34.7203H285.5L285.4 34.3203C285.7 34.4203 286 34.5203 286.4 34.6203C287.2 34.7203 288.1 34.7203 289.4 34.7203H291.3L291.1 34.3203C291.4 34.4203 291.7 34.5203 292.1 34.6203C292.4 34.7203 292.7 34.7203 293 34.7203C293.1 34.7203 293.1 34.7203 293.2 34.7203H293.9C294.3 34.7203 294.7 34.7203 295.1 34.7203H304.3C304.7 34.7203 305 34.4203 305 34.0203C305 33.6203 304.7 33.3203 304.3 33.3203H296.5C296.1 32.3203 295.8 31.4203 295.4 30.7203C295.1 30.1203 294.8 29.6203 294.4 29.2203H301C301.4 29.2203 301.7 28.9203 301.7 28.5203C301.7 28.1203 301.4 27.8203 301 27.8203H294.4C294.8 27.4203 295.1 26.9203 295.4 26.3203C295.8 25.6203 296.1 24.7203 296.5 23.7203H304.3C304.7 23.7203 305 23.4203 305 23.0203C305 22.6203 304.7 22.3203 304.3 22.3203H295.1C294.7 22.3203 294.3 22.3203 294 22.3203H293.3C293.2 22.3203 293.2 22.3203 293.1 22.3203C292.8 22.3203 292.5 22.4203 292.2 22.4203C291.8 22.5203 291.5 22.6203 291.2 22.7203L291.4 22.3203H289.5C288.2 22.3203 287.3 22.3203 286.5 22.4203C286.1 22.5203 285.8 22.6203 285.5 22.7203L285.6 22.3203H283.7C282.4 22.3203 281.5 22.3203 280.7 22.4203C280.3 22.5203 280 22.6203 279.7 22.7203L279.8 22.3203H277.9C276.6 22.3203 275.7 22.3203 274.9 22.4203C274.5 22.5203 274.2 22.6203 273.9 22.7203C273.5 22.9203 273.2 23.0203 273 23.2203C272.4 23.7203 271.9 24.3203 271.5 25.2203C271.1 25.9203 270.8 26.8203 270.4 27.7203H263.1C263.1 27.9203 263.1 28.2203 263.1 28.4203C263.1 28.6203 263.1 28.9203 263.1 29.1203L270.3 29.2203ZM272.4 29.2203C273.2 29.2203 273.9 29.2203 274.4 29.3203C274.7 29.4203 274.9 29.4203 275.1 29.5203C275.3 29.6203 275.6 29.7203 275.7 29.8203C276.1 30.1203 276.5 30.6203 276.8 31.3203C277.1 31.8203 277.3 32.4203 277.6 33.2203C276.5 33.2203 275.6 33.2203 275 33.1203C274.7 33.0203 274.5 33.0203 274.3 32.9203C274.1 32.8203 273.8 32.7203 273.7 32.6203C273.3 32.3203 272.9 31.8203 272.6 31.1203C272.3 30.6203 272.1 29.9203 271.8 29.2203H272.4Z"
                        fill="currentColor"
                      />
                      <path
                        d="M260 0.819382C259.9 0.419382 260.2 0.0193815 260.6 0.0193815C261 -0.0806185 261.4 0.219381 261.4 0.619381C262.9 9.81938 263.7 19.2194 263.7 28.5194C263.7 37.8194 262.9 47.1194 261.4 56.4194C261.3 56.8194 261 57.1194 260.6 57.0194C260.2 56.9194 259.9 56.6194 260 56.2194C261.5 47.1194 262.2 37.8194 262.2 28.5194C262.2 19.2194 261.5 10.0194 260 0.819382Z"
                        fill="currentColor"
                      />
                      <path
                        d="M5 43.8191C7.8 45.7191 11 46.6191 14.4 46.6191C17.8 46.6191 20.4 45.8191 22.3 44.3191C24.2 42.8191 25.1 40.8191 25.1 38.4191C25.1 37.1191 24.7 35.9191 23.9 35.0191C23.1 34.0191 22.1 33.3191 20.9 32.7191C19.5 32.1191 16.9 31.3191 13 30.2191C9.1 29.1191 6.4 28.2191 5 27.5191C3.5 26.8191 2.4 25.9191 1.5 24.8191C0.7 23.7191 0.3 22.4191 0.3 20.9191C0.3 18.1191 1.2 15.8191 3.1 14.1191C5 12.4191 7.9 11.6191 12 11.6191C16 11.6191 19.7 13.0191 23.1 15.9191C23.6 16.3191 23.9 16.2191 23.9 15.4191V12.9191C23.9 12.4191 24.2 12.1191 24.7 12.1191C25.2 12.1191 25.5 12.4191 25.5 12.9191V22.5191C25.5 23.0191 25.2 23.3191 24.7 23.3191C24.2 23.3191 23.9 23.0191 23.9 22.5191V19.0191C22 16.9191 19.7 15.2191 17 14.1191C15.5 13.5191 13.9 13.2191 12 13.2191C8.6 13.2191 6 13.9191 4.3 15.3191C2.6 16.7191 1.8 18.5191 1.8 20.5191C1.8 21.8191 2.2 23.0191 3 23.9191C3.8 24.9191 4.8 25.6191 6 26.2191C7.4 26.8191 10 27.6191 13.9 28.7191C17.8 29.8191 20.5 30.7191 21.9 31.4191C23.4 32.1191 24.5 33.0191 25.3 34.2191C26.1 35.3191 26.5 36.7191 26.5 38.2191C26.5 41.2191 25.4 43.7191 23.3 45.5191C21.2 47.3191 18 48.2191 13.8 48.2191C9.6 48.2191 5.8 46.8191 2.4 43.9191C1.9 43.5191 1.6 43.6191 1.6 44.4191V46.9191C1.6 47.4191 1.3 47.7191 0.8 47.7191C0.3 47.7191 0 47.4191 0 46.9191V37.3191C0 36.8191 0.3 36.5191 0.8 36.5191C1.3 36.5191 1.6 36.8191 1.6 37.3191V41.1191C2.7 42.0191 3.8 43.0191 5 43.8191Z"
                        fill="currentColor"
                      />
                      <path
                        d="M56.7004 35.9195C56.5004 35.4195 56.1004 35.2195 55.5004 35.2195H41.1004C40.5004 35.2195 40.1004 35.4195 39.9004 35.9195L36.3004 45.3195C36.0004 45.8195 36.2004 46.1195 36.8004 46.1195H39.8004C40.3004 46.1195 40.6004 46.4195 40.6004 46.9195C40.6004 47.4195 40.3004 47.7195 39.8004 47.7195H30.2004C29.7004 47.7195 29.4004 47.4195 29.4004 46.9195C29.4004 46.4195 29.7004 46.1195 30.2004 46.1195H33.5004C33.9004 46.1195 34.2004 45.8195 34.5004 45.3195L47.2004 12.3195C47.3004 11.8195 47.7004 11.5195 48.3004 11.5195C48.9004 11.5195 49.3004 11.8195 49.4004 12.3195L62.1004 45.3195C62.3004 45.8195 62.7004 46.1195 63.1004 46.1195H66.4004C66.9004 46.1195 67.2004 46.4195 67.2004 46.9195C67.2004 47.4195 66.9004 47.7195 66.4004 47.7195H56.8004C56.3004 47.7195 56.0004 47.4195 56.0004 46.9195C56.0004 46.4195 56.3004 46.1195 56.8004 46.1195H59.8004C60.4004 46.1195 60.5004 45.8195 60.3004 45.3195L56.7004 35.9195ZM48.6004 14.9195C48.5004 14.7195 48.4004 14.6195 48.3004 14.6195C48.2004 14.6195 48.1004 14.7195 48.0004 14.9195L41.1004 33.0195C40.8004 33.5195 41.0004 33.8195 41.7004 33.8195H55.1004C55.7004 33.8195 55.9004 33.5195 55.7004 33.0195L48.6004 14.9195Z"
                        fill="currentColor"
                      />
                      <path
                        d="M70.3 46.1195H73.8C74.3 46.1195 74.6 45.8195 74.6 45.3195V14.4195C74.6 13.9195 74.3 13.6195 73.8 13.6195H70.3C69.8 13.6195 69.5 13.3195 69.5 12.8195C69.5 12.3195 69.8 12.0195 70.3 12.0195H75.9C76.5 12.0195 76.9 12.3195 77.2 12.8195L91.4 44.2195C91.7 44.9195 92.1 44.9195 92.4 44.2195L106.5 12.8195C106.7 12.3195 107.2 12.0195 107.8 12.0195H113.4C113.9 12.0195 114.2 12.3195 114.2 12.8195C114.2 13.3195 113.9 13.6195 113.4 13.6195H109.9C109.4 13.6195 109.1 13.9195 109.1 14.4195V45.3195C109.1 45.8195 109.4 46.1195 109.9 46.1195H113.4C113.9 46.1195 114.2 46.4195 114.2 46.9195C114.2 47.4195 113.9 47.7195 113.4 47.7195H103.8C103.3 47.7195 103 47.4195 103 46.9195C103 46.4195 103.3 46.1195 103.8 46.1195H106.8C107.3 46.1195 107.6 45.8195 107.6 45.3195V15.6195C107.6 15.3195 107.5 15.1195 107.4 15.2195C107.3 15.2195 107.3 15.3195 107.2 15.4195L92.9 46.8195C92.6 47.3195 92.3 47.6195 91.8 47.6195C91.3 47.6195 91 47.3195 90.7 46.8195L76.5 15.4195C76.4 15.2195 76.3 15.1195 76.2 15.2195C76.1 15.3195 76.1 15.4195 76.1 15.6195V45.3195C76.1 45.8195 76.4 46.1195 76.9 46.1195H79.9C80.4 46.1195 80.7 46.4195 80.7 46.9195C80.7 47.4195 80.4 47.7195 79.9 47.7195H70.3C69.8 47.7195 69.5 47.4195 69.5 46.9195C69.5 46.3195 69.8 46.1195 70.3 46.1195Z"
                        fill="currentColor"
                      />
                      <path
                        d="M143.7 35.9195C143.5 35.4195 143.1 35.2195 142.5 35.2195H128.1C127.5 35.2195 127.1 35.4195 126.9 35.9195L123.3 45.3195C123 45.8195 123.2 46.1195 123.8 46.1195H126.8C127.3 46.1195 127.6 46.4195 127.6 46.9195C127.6 47.4195 127.3 47.7195 126.8 47.7195H117.2C116.7 47.7195 116.4 47.4195 116.4 46.9195C116.4 46.4195 116.7 46.1195 117.2 46.1195H120.5C120.9 46.1195 121.2 45.8195 121.5 45.3195L134.2 12.3195C134.3 11.8195 134.7 11.5195 135.3 11.5195C135.9 11.5195 136.3 11.8195 136.4 12.3195L149.1 45.3195C149.3 45.8195 149.7 46.1195 150.1 46.1195H153.4C153.9 46.1195 154.2 46.4195 154.2 46.9195C154.2 47.4195 153.9 47.7195 153.4 47.7195H143.8C143.3 47.7195 143 47.4195 143 46.9195C143 46.4195 143.3 46.1195 143.8 46.1195H146.8C147.4 46.1195 147.5 45.8195 147.3 45.3195L143.7 35.9195ZM135.6 14.9195C135.5 14.7195 135.4 14.6195 135.3 14.6195C135.2 14.6195 135.1 14.7195 135 14.9195L128.1 33.0195C127.8 33.5195 128 33.8195 128.7 33.8195H142.1C142.7 33.8195 142.9 33.5195 142.7 33.0195L135.6 14.9195Z"
                        fill="currentColor"
                      />
                      <path
                        d="M177 28.6195C181.9 29.5195 184.4 32.8195 184.4 38.3195C184.4 41.0195 183.6 43.2195 181.9 44.9195C180.2 46.6195 177.9 47.5195 174.8 47.5195H157.3C156.8 47.5195 156.5 47.2195 156.5 46.7195C156.5 46.2195 156.8 45.9195 157.3 45.9195H160.8C161.3 45.9195 161.6 45.6195 161.6 45.1195V14.4195C161.6 13.9195 161.3 13.6195 160.8 13.6195H157.3C156.8 13.6195 156.5 13.3195 156.5 12.8195C156.5 12.3195 156.8 12.0195 157.3 12.0195H172.8C175.5 12.0195 177.7 12.8195 179.4 14.5195C181.1 16.2195 181.9 18.3195 181.9 20.8195C181.9 24.5195 180.3 27.1195 177 28.6195ZM163.1 27.5195C163.1 28.0195 163.4 28.3195 163.9 28.3195H173C175.1 28.3195 176.9 27.6195 178.3 26.1195C179.7 24.7195 180.4 22.9195 180.4 20.8195C180.4 18.7195 179.7 17.0195 178.3 15.6195C176.9 14.2195 175.1 13.5195 172.7 13.5195H163.8C163.3 13.5195 163 13.8195 163 14.3195V27.5195H163.1ZM163.1 45.3195C163.1 45.8195 163.4 46.1195 163.9 46.1195H174.8C177.3 46.1195 179.3 45.4195 180.8 43.9195C182.2 42.5195 183 40.5195 183 37.9195C183 35.4195 182.3 33.4195 180.8 31.9195C179.4 30.5195 177.4 29.7195 174.8 29.7195H163.9C163.4 29.7195 163.1 30.0195 163.1 30.5195V45.3195Z"
                        fill="currentColor"
                      />
                      <path
                        d="M190 46.8195C190 46.3195 190.3 46.0195 190.8 46.0195H194.3C194.8 46.0195 195.1 45.7195 195.1 45.2195V14.4195C195.1 13.9195 194.8 13.6195 194.3 13.6195H190.8C190.3 13.6195 190 13.3195 190 12.8195C190 12.3195 190.3 12.0195 190.8 12.0195H202C202.5 12.0195 202.8 12.3195 202.8 12.8195C202.8 13.3195 202.5 13.6195 202 13.6195H197.4C196.9 13.6195 196.6 13.9195 196.6 14.4195V45.3195C196.6 45.8195 196.9 46.1195 197.4 46.1195H213.6C214.1 46.1195 214.4 45.8195 214.4 45.3195V39.7195C214.4 39.2195 214.7 38.9195 215.2 38.9195C215.7 38.9195 216 39.2195 216 39.7195V46.8195C216 47.3195 215.7 47.6195 215.2 47.6195H190.9C190.3 47.6195 190 47.3195 190 46.8195Z"
                        fill="currentColor"
                      />
                      <path
                        d="M219.7 12.1195H229.3C229.8 12.1195 230.1 12.4195 230.1 12.9195C230.1 13.4195 229.8 13.7195 229.3 13.7195H226.3C225.8 13.7195 225.5 14.0195 225.5 14.5195V35.0195C225.5 38.5195 226.6 41.3195 228.8 43.5195C231 45.6195 233.8 46.7195 237.2 46.7195C240.6 46.7195 243.4 45.6195 245.6 43.5195C247.8 41.4195 248.9 38.5195 248.9 35.0195V14.4195C248.9 13.9195 248.6 13.6195 248.1 13.6195H245.1C244.6 13.6195 244.3 13.3195 244.3 12.8195C244.3 12.3195 244.6 12.0195 245.1 12.0195H254.7C255.2 12.0195 255.5 12.3195 255.5 12.8195C255.5 13.3195 255.2 13.6195 254.7 13.6195H251.2C250.7 13.6195 250.4 13.9195 250.4 14.4195V34.9195C250.4 38.8195 249.2 42.0195 246.7 44.4195C244.2 46.9195 241.1 48.1195 237.2 48.1195C233.4 48.1195 230.2 46.9195 227.7 44.4195C225.2 41.9195 224 38.8195 224 34.9195V14.4195C224 13.9195 223.7 13.6195 223.2 13.6195H219.7C219.2 13.6195 218.9 13.3195 218.9 12.8195C218.9 12.3195 219.2 12.1195 219.7 12.1195Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
                {/* not complet */}
                <p className="max-w-md mt-2 text-gray-500 ">
                  Join 4,000+ other and never miss out on new tips, tutorials,
                  and more.
                </p>

                <div className="flex mt-4 -mx-2">
                  <a
                    href="https://www.linkedin.com/company/samablue/"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 text-gray-700  hover:text-gray-600 "
                    aria-label="Linkden"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                      <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.facebook.com/samablue.ma"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 text-gray-700  hover:text-gray-600 "
                    aria-label="Facebook"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                      <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com/samablue.sarl/"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 text-gray-700  hover:text-gray-600 "
                    aria-label="Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
                <div>
                  <h3 className="text-gray-700 uppercase">Navigation</h3>
                  <a href="/home" className="block mt-2 text-sm text-gray-600 hover:underline">
                    ACCUEIL
                  </a>
                  <a
                    href="/news"
                    className="block mt-2 text-sm text-gray-600  hover:underline"
                  >
                    NOUVELLES
                  </a>

                  <a
                    href="/about"
                    className="block mt-2 text-sm text-gray-600  hover:underline"
                  >
                    À PROPOS DE NOUS
                  </a>
                  <a
                    href="/gallery"
                    className="block mt-2 text-sm text-gray-600 hover:underline"
                  >
                    GALERIE
                  </a>
                  <a
                    href="/contact"
                    className="block mt-2 text-sm text-gray-600 hover:underline"
                  >
                    CONTACTEZ NOUS
                  </a>
                </div>
                <div>
                  <h3 className="text-gray-700 uppercase  ">Manutention</h3>
                  <a
                    href="Convoyeurs"
                    className="block mt-2 text-sm text-gray-600 hover:underline"
                  >
                    Convoyeurs
                  </a>
                  <a
                    href="EquipementDeProcede"
                    className="block mt-2 text-sm text-gray-600 hover:underline"
                  >
                    Équipement de procédé
                  </a>
                  <a
                    href="StructuresEnAcier"
                    className="block mt-2 text-sm text-gray-600 hover:underline"
                  >
                    Les structures en acier
                  </a>
                </div>
                <div>
                  <h3 className="text-gray-700 uppercase ">Services</h3>
                  <a
                    href="Montage"
                    className="block mt-2 text-sm text-gray-600 hover:underline"
                  >
                    Le montage
                  </a>
                  <a
                    href="BureauEtudes"
                    className="block mt-2 text-sm text-gray-600  hover:underline"
                  >
                    Music
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-700 uppercase ">stockage</h3>
                  <a
                    href="SilosFondPlat"
                    className="block mt-2 text-sm text-gray-600 hover:underline"
                  >
                    Silos à fond plat
                  </a>
                  <a
                    href="SilosFondConique"
                    className="block mt-2 text-sm text-gray-600 hover:underline"
                  >
                    Silos à fond conique
                  </a>
                  <a
                    href="StockageInterieur"
                    className="block mt-2 text-sm text-gray-600 hover:underline"
                  >
                    Stockage Intérieur
                  </a>
                  <a
                    href="SilosFerme"
                    className="block mt-2 text-sm text-gray-600 hover:underline"
                  >
                    Silos de Ferme
                  </a>
                  <a
                    href="Accessoires"
                    className="block mt-2 text-sm text-gray-600 hover:underline"
                  >
                    Accessiores
                  </a>
                  <a
                    href="Reservoirs"
                    className="block mt-2 text-sm text-gray-600 hover:underline"
                  >
                    Réservoirs
                  </a>
                </div>

                <div>
                  <h3 className="text-gray-700 uppercase ">Contact</h3>
                  <span className=" mt-2 text-sm text-gray-600 hover:underline grid grid-cols-6 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-telephone"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                    <a
                      href="tel: +34635062736"
                      target="_blank"
                      rel="noreferrer"
                      className="pl-2 col-span-5"
                    >
                      +212 600-846 002
                    </a>
                  </span>
                  <span className=" mt-2 text-sm text-gray-600 hover:underline flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                    <br />

                    <a
                      href="mailto: samablue@samablue.ma"
                      target="_blank"
                      rel="noreferrer"
                      className="pl-2 "
                    >
                      samablue@samablue.ma
                    </a>
                  </span>
                  <span className=" mt-2 text-sm text-gray-600 hover:underline flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>

                    <p className="pl-2 text-xs">
                      AVENUE MOHEMMED VI, LES ORCHIDÉES III, IMM D 3ÉME ÉTAGE
                      BUREAU N°10. MOHAMMEDIA
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr className="h-px my-6 bg-gray-500 border-none " />

          <div>
            <p className="text-center text-gray-800 ">
              © SAMABLUE 2022 - All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
