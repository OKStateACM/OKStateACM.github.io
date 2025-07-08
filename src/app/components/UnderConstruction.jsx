/*
AUTHOR(S): Justin Moua

=====
Notes
=====

=========
Resources
=========
  - Placeholder Text
*/
export default function UnderConstruction({extraText}){
    return (
        <>
            <div className="flex flex-col text-center items-center justify-center h-[70vh] bg-white rounded-md border text-black text-2xl font-semibold">
                This page is under construction. Please check back later <br/>or contact acm.cs@okstate.edu<br/><br/>
                {extraText && <span className="text-lg">{extraText}</span>}
            </div>
        </>
    )
}