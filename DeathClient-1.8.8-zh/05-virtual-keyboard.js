
// ========== 性能优化引擎 ==========
(function() {
    console.log('[性能优化] 引擎启动...');
    
    // 等待游戏加载完成
    function optimizeGame() {
        try {
            // 尝试找到游戏对象并优化设置
            // 方法1：修改localStorage中的设置
            if (localStorage) {
                // 渲染距离改成2（最低）
                localStorage.setItem('renderDistance', '2');
                // 关闭粒子
                localStorage.setItem('particles', '0');
                // 关闭云
                localStorage.setItem('clouds', '0');
                // 关闭垂直同步
                localStorage.setItem('vsync', 'false');
                // 降低FPS限制
                localStorage.setItem('maxFps', '30');
                // 关闭视角晃动
                localStorage.setItem('viewBobbing', 'false');
                // 关闭实体阴影
                localStorage.setItem('entityShadows', 'false');
                console.log('[性能优化] 已优化localStorage设置');
            }
            
            // 方法2：禁用一些不必要的特效
            // 禁止请求动画帧的高频率
            // 降低渲染分辨率
            var canvas = document.querySelector('canvas');
            if (canvas) {
                console.log('[性能优化] 找到canvas元素');
            }
            
            console.log('[性能优化] 引擎启动完成！');
        } catch(e) {
            console.log('[性能优化] 优化出错:', e);
        }
    }
    
    // 页面加载后执行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', optimizeGame);
    } else {
        optimizeGame();
    }
    
    // 延迟再执行一次（等游戏完全加载）
    setTimeout(optimizeGame, 3000);
    setTimeout(optimizeGame, 10000);
})();
