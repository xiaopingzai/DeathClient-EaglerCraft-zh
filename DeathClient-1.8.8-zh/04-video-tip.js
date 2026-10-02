
// 视频设置优化提示汉化覆盖
(function() {
    // 等待页面加载完成
    function checkAndTranslate() {
        // 检查canvas上是否有英文文本（简单的DOM覆盖方案）
        // 由于是canvas渲染，我们添加一个提示说明
        var existing = document.getElementById('video-settings-tip');
        if (!existing) {
            var tip = document.createElement('div');
            tip.id = 'video-settings-tip';
            tip.style.cssText = 'position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,0.8);color:#fff;padding:10px 20px;border-radius:8px;font-size:14px;font-family:Microsoft YaHei,sans-serif;z-index:99998;display:none;';
            tip.innerHTML = '<b style="color:#ff6666">检测到问题</b><br>你的一些视频设置可能导致游戏过度卡顿<br>渲染距离是8个区块，大多数设备在渲染距离大于4个区块时会卡顿<br><br>按钮：修复设置 / 仍然继续 / 不再显示';
            document.body.appendChild(tip);
            
            // 简单检测：如果URL或某个标志出现，显示提示
            // 这里我们做一个简单的方法：用户可以按T键显示/隐藏
            document.addEventListener('keydown', function(e) {
                if (e.key === 't' || e.key === 'T') {
                    if (tip.style.display === 'none') {
                        tip.style.display = 'block';
                    } else {
                        tip.style.display = 'none';
                    }
                }
            });
        }
    }
    
    // 页面加载后执行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', checkAndTranslate);
    } else {
        checkAndTranslate();
    }
})();
