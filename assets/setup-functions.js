// Draw stuff, with P5  // CF p5js.org/reference
// Time-stamp: <2020-02-02 14:46:00 Chuck Siska>
// ------------------------------------------------------------

// =====================================================  draw_grid ====
// Draw a fancy grid with major & minor lines 
// & major row/col numbers.


function draw_grid( rctx, rminor, rmajor, rstroke, rfill  ) 
{
    rctx.save( );
    rctx.strokeStyle = rstroke;
    rctx.fillStyle = rfill;
    let width = rctx.canvas.width;
    let height = rctx.canvas.height;
    for ( var x = 0; x < width; x += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( x, 0 );
        rctx.lineTo( x, height );
        rctx.lineWidth = ( x % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( x % rmajor == 0 ) { rctx.fillText( x, x, 10 ); }
    }
    for ( var y = 0; y < height; y += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( 0, y );
        rctx.lineTo( width, y );
        rctx.lineWidth = ( y % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( y % rmajor == 0 ) {rctx.fillText( y, 0, y + 10 );}
    }
    rctx.restore( );
}
//rules setup for the cella-150 
// 0 black / 1 white
function rules(left, center, right)
{
        //rule 1
        if(left == 0 && center == 0 && right == 0)
        {
            return 0;
        }
        //rule 2
        if(left == 0 && center == 0 && right == 1)
        {
            return 1;
        }
        //rule 3
        if(left == 0 && center == 1 && right == 0)
        {
            return 1;
        }
        //rule 4     
        if(left == 0 && center == 1 && right == 1)
        {
            return 0;
        }
        //rule 5 
        if(left == 1 && center == 0 && right == 0)
        {
            return 1;
        }
        //rule 6 
        if(left == 1 && center == 0 && right == 1)
        {
            return 0;
        }
        //rule 7 
        if(left == 1 && center == 1 && right == 0)
        {
            return 0;
        }
        //rule 8 
        if(left == 1 && center == 1 && right == 1)
        {
            return 1;
        }

        return 0;
}